import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { supabase } from '../../service/supabase';
import { useUser } from '../../auth/UserContext';

const CadastroLote = () => {
  const { user } = useUser();
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [peso_total_compra, setPeso] = useState('');
  const [valor_pago, setValor] = useState('');
  const [data, setData] = useState('');
  const navigation = useNavigation();

  const handlePressSalvar = async () => {
    try {
      const formattedDate = `${data.substr(6, 4)}-${data.substr(3, 2)}-${data.substr(0, 2)}`;
  
      // Inserir o lote na tabela 'lotes'
      const { data: lote, error: loteError } = await supabase
        .from('lotes')
        .insert([
          {
            id_usuario: user.id,
            descricao,
            quantidade,
            peso_total_compra,
            valor_pago,
            data: formattedDate,
            peso_total_vendido: 0,
            valor_vendido: 0,
            saldo_final: 0,
            data_vendido: null
          }
        ])
        .single();
  
      if (!loteError) {
        // Obter o lote recém-inserido
        const { data: loteInserido, error: loteInseridoError } = await supabase
          .from('lotes')
          .select('id_lote')
          .eq('id_usuario', user.id)
          .eq('descricao', descricao)
          .eq('data', formattedDate)
          .single();
  
        if (!loteInseridoError && loteInserido) {
          // Inserir o registro na tabela 'financeiro'
          await supabase
            .from('financeiro')
            .insert([
              {
                id_usuario: user.id,
                tipo: 'gastos',
                descricao: `compra de lote ${loteInserido.id_lote}`,
                valor: parseFloat(valor_pago) * parseFloat(peso_total_compra),
                data: formattedDate
              }
            ]);
  
          console.log('Lote e registro financeiro adicionados');
          setDescricao('');
          setQuantidade('');
          setPeso('');
          setValor('');
          setData('');
          navigation.goBack();
        } else {
          console.error('Erro ao obter o lote recém-inserido: ', loteInseridoError.message);
        }
      } else {
        console.error('Erro ao adicionar lote: ', loteError.message);
      }
    } catch (error) {
      console.error('Erro ao adicionar lote e registro financeiro: ', error);
    }
  };

  return (
    <View style={Style.container}>
      <TextInput style={Style.txtInput} placeholder='Descrição' value={descricao} onChangeText={setDescricao} />
      <TextInput style={Style.txtInput} placeholder='Quantidade' keyboardType='numeric' value={quantidade} onChangeText={setQuantidade} />
      <TextInput style={Style.txtInput} placeholder='Peso total na compra' keyboardType='numeric' value={peso_total_compra} onChangeText={setPeso} />
      <TextInput style={Style.txtInput} placeholder='Valor pago' keyboardType='numeric' value={valor_pago} onChangeText={setValor} />
      <TextInput style={Style.txtInput} placeholder='DD/MM/AA' keyboardType='numeric' value={data} onChangeText={setData} />
      <View style={Style.containerBtn}>
        <TouchableOpacity style={Style.button} onPress={handlePressSalvar}>
          <Text style={Style.text}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadastroLote;
