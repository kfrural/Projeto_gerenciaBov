import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Style from './Style';
import { useRoute } from '@react-navigation/native';
import { supabase } from '../../service/supabase';
import { useNavigation } from '@react-navigation/native';


const VenderLote = () => {
  const route = useRoute();
  const { lote } = route.params;

  const [pesoTotal, setPesoTotal] = useState('');
  const [valorVendido, setValorVendido] = useState('');
  const [resultado, setResultado] = useState(0);
  const [resultadoEntrada, setResultadoEntrada] = useState(0);
  const navigation = useNavigation();

  const handleCalcularValor = async () => {
    try {
      const pesoTotalNumerico = parseFloat(pesoTotal);
      const valorVendidoNumerico = parseFloat(valorVendido);

      if (isNaN(pesoTotalNumerico) || isNaN(valorVendidoNumerico)) {
        throw new Error('Por favor, insira valores numéricos válidos.');
      }

      const resultadoEntrada =
        (valorVendidoNumerico * pesoTotalNumerico);
        setResultadoEntrada(resultadoEntrada);

      const resultadoCalculado =
        (valorVendidoNumerico * pesoTotalNumerico) - (lote.peso_total_compra * lote.valor_pago);

      setResultado(resultadoCalculado);

      const { data, error } = await supabase
        .from('lotes')
        .update({
          peso_total_vendido: pesoTotalNumerico,
          valor_vendido: valorVendidoNumerico,
          saldo_final: resultadoCalculado,
          data_vendido: new Date().toISOString().slice(0, 10),
        })
        .eq('id_lote', lote.id_lote);

      if (error) {
        throw new Error('Erro ao atualizar lote: ' + error.message);
      } else {
        console.log('Lote atualizado com sucesso:', data);

        await supabase.from('financeiro_lote').insert([
          {
            id_lote: lote.id_lote,
            tipo: 'ganhos',
            descricao: 'Venda de lote',
            valor: resultadoEntrada,
            data: new Date().toISOString().slice(0, 10),
          },
        ]);

        console.log('Dados inseridos na tabela financeiro_lote com sucesso.');

        await supabase.from('financeiro').insert([
          {
            id_usuario: lote.id_usuario,
            tipo: 'ganhos',
            descricao: `Venda do lote ${lote.id_lote}`,
            valor: resultadoEntrada,
            data: new Date().toISOString().slice(0, 10),
          },
        ]);

        console.log('Dados inseridos na tabela financeiro com sucesso.');

        navigation.goBack();
      }
    } catch (error) {
      console.error('Erro ao atualizar lote:', error);
    }
  };
  

  return (
    <View style={Style.container}>
      <Text style={Style.label}>Peso Total (arrobas):</Text>
      <TextInput
        style={Style.input}
        value={pesoTotal}
        keyboardType="numeric"
        onChangeText={setPesoTotal}
        placeholder="Peso Total"
      />
      <Text style={Style.label}>Valor Vendido:</Text>
      <TextInput
        style={Style.input}
        value={valorVendido}
        keyboardType="numeric"
        onChangeText={setValorVendido}
        placeholder="Valor Vendido"
      />
      <TouchableOpacity style={Style.button} onPress={handleCalcularValor}>
        <Text style={Style.textBtn}>Calcular Valor</Text>
      </TouchableOpacity>
      <Text style={Style.label}>Resultado: R$ {resultadoEntrada.toFixed(2)}</Text>
    </View>
  );
};

export default VenderLote;
