import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Style from './Style';
import { useRoute } from '@react-navigation/native';
import { supabase } from '../../service/supabase';
import { useNavigation } from '@react-navigation/native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useUser } from '../../auth/UserContext';

const Pagamento = () => {
  const { user } = useUser();
  const route = useRoute();
  const navigation = useNavigation();
  const [identificacao, setIdentificacao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('');
  const [lotes, setLotes] = useState([]);
  const [selectedLote, setSelectedLote] = useState(null);

  useEffect(() => {
    const fetchLotes = async () => {
      const { data, error } = await supabase.from('lotes').select('id_lote, descricao');

      if (error) {
        console.error('Erro ao buscar lotes: ', error.message);
      } else {
        console.log('Dados dos lotes: ', data);
        setLotes(data);
      }
    };

    fetchLotes();
  }, []);


  const handlePressSalvar = async () => {
    try {
      const { data: pagamentoData, error: pagamentoError } = await supabase
        .from('pagamentos')
        .insert([
          {
            identificacao,
            valor,
            tipo,
            data: new Date().toISOString().slice(0, 10),
          },
        ])
        .select('id_pagamento');
  
      if (pagamentoError) {
        console.error('Erro ao adicionar pagamento: ', pagamentoError.message);
      } else {
        console.log('Pagamento adicionado:', pagamentoData[0].id_pagamento);
  
        const tipoFinanceiro = tipo === 'pagamento' ? 'gastos' : 'ganhos';
  
        const { error: financeiroError } = await supabase
          .from('financeiro')
          .insert([
            {
              id_usuario: user.id,
              tipo: tipoFinanceiro,
              descricao: identificacao,
              valor,
              data: new Date().toISOString().slice(0, 10),
            },
          ]);
  
        if (financeiroError) {
          console.error('Erro ao adicionar registro financeiro: ', financeiroError.message);
        } else {
          console.log(`${tipoFinanceiro} adicionado`);
        }
  
        setIdentificacao('');
        setValor('');
        setTipo('');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Erro ao adicionar pagamento: ', error);
    }
  };

  return (
    <View style={Style.container}>
      <TextInput
        style={Style.input}
        placeholder="Identificação"
        value={identificacao}
        onChangeText={setIdentificacao}
      />
      <TextInput
        style={Style.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType='numeric'
      />
      <RNPicker
        style={Style.input}
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}
      >
        <RNPicker.Item label="Selecione o tipo" value={null} />
        <RNPicker.Item label="Pagamento" value="pagamento" />
        <RNPicker.Item label="Recebimento" value="recebimento" />
      </RNPicker>

      <TouchableOpacity style={Style.button} onPress={handlePressSalvar}>
        <Text style={Style.textBtn}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagamento;
