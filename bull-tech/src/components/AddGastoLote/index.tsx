import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { supabase } from '../../service/supabase';
import { useLote } from '../../auth/LoteContext';
import { useRoute } from '@react-navigation/native';

const AddGastoLote = () => {
  const route = useRoute();
  if (!route.params) {
    console.error('Parâmetros da rota não definidos');
    return null;
  }
  const { lote } = route.params;

  const [gastos, setGastos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [totalGastos, setTotalGastos] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTotalGastos = async () => {
      try {
        const { data, error } = await supabase
          .from('financeiro_lote')
          .select('valor')
          .eq('id_lote', lote.id_lote)
          .eq('tipo', 'gasto');

        if (error) {
          console.error('Erro ao buscar gastos do lote: ', error.message);
          return;
        }

        const total = data.reduce((acc, gasto) => acc + parseFloat(gasto.valor), 0);
        setTotalGastos(total);
      } catch (error) {
        console.error('Erro ao buscar total de gastos: ', error);
      }
    };

    fetchTotalGastos();
  }, [lote.id_lote]);

  const handleAddGasto = () => {
    if (descricao && valor) {
      const novoGasto = { descricao, valor };
      setGastos([...gastos, novoGasto]);
      setDescricao('');
      setValor('');
    }
  };

  const handlePressSalvar = async () => {
    try {
      const promises = gastos.map(async (gasto) => {
        const valorNumerico = parseFloat(gasto.valor);

        const { error } = await supabase.from('financeiro_lote').insert([
          {
            id_lote: lote.id_lote,
            tipo: 'gasto',
            descricao: gasto.descricao,
            valor: valorNumerico,
            data: new Date().toISOString().slice(0, 10),
          },
        ]);

        if (error) {
          console.error('Erro ao adicionar gastos: ', error.message);
        }
      });

      await Promise.all(promises);

      const { error: insertError } = await supabase.from('financeiro').insert([
        {
          id_usuario: lote.id_usuario,
          tipo: 'gastos',
          descricao: `gastos totais do lote ${lote.id_lote}`,
          valor: totalGastos + gastos.reduce((total, gasto) => total + parseFloat(gasto.valor), 0),
          data: new Date().toISOString().slice(0, 10),
        },
      ]);

      if (insertError) {
        console.error('Erro ao adicionar gastos totais do lote: ', insertError.message);
      } else {
        console.log('Gastos totais do lote adicionados com sucesso');
      }

      setGastos([]);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar gastos: ', error);
    }
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Adicionar Gastos do Lote</Text>
      <TextInput
        style={Style.input}
        placeholder="Descrição do gasto"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={Style.input}
        placeholder="Valor gasto"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <TouchableOpacity style={[Style.button, Style.addButton]} onPress={handleAddGasto}>
        <Text style={Style.buttonText}>Adicionar Gasto</Text>
      </TouchableOpacity>
      <FlatList
        data={gastos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={Style.itemContainer}>
            <Text style={Style.itemText}>{item.descricao}</Text>
            <Text style={Style.itemValue}>R$ {item.valor}</Text>
          </View>
        )}
      />
      <View style={Style.totalContainer}>
        <Text style={Style.totalText}>Total de Gastos: R$ {totalGastos.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={[Style.button, Style.saveButton]} onPress={handlePressSalvar}>
        <Text style={Style.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddGastoLote;
