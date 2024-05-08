import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Style from './Style';
import { useRoute } from '@react-navigation/native';
import { supabase } from '../../service/supabase';
import { useNavigation } from '@react-navigation/native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useUser } from '../../auth/UserContext';

const reproducao = () => {
  const { user } = useUser();
  const route = useRoute();
  const navigation = useNavigation();
  const [identificacao, setIdentificacao] = useState('');
  const [data, setData] = useState('');
  const [dataFim, setDataFim] = useState('');
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
      const dataInicio = new Date().toISOString().slice(0, 10);
      const dataFimCalculada = new Date(new Date(dataInicio).getTime() + 280 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  
      const { data: reproducaoData, error: reproducaoError } = await supabase
        .from('reproducao')
        .insert([
          {
            id_lote: selectedLote,
            identificacao,
            data: dataInicio,
            data_fim: dataFimCalculada,
          }
        ])
        .select('id_reproducao');
  
      if (reproducaoError) {
        console.error('Erro ao adicionar reproducao: ', reproducaoError.message);
      } else {
        console.log('Reproducao adicionada:', reproducaoData[0].id_reproducao);
  
        const { error: eventoError } = await supabase
          .from('eventos')
          .insert([
            {
              id: user.id,
              tipo: 'reproducao',
              id_tipoEvento: reproducaoData[0].id_reproducao,
              data: dataFimCalculada,
            }
          ]);
  
        if (eventoError) {
          console.error('Erro ao adicionar evento: ', eventoError.message);
        } else {
          console.log('Evento adicionado');
          setIdentificacao('');
          setData('');
          setDataFim('');
          setSelectedLote(null);
          navigation.goBack();
        }
      }
    } catch (error) {
      console.error('Erro ao adicionar reproducao: ', error);
    }
  };
  
  

  return (
    <View style={Style.container}>
      <RNPicker
        style={Style.input}
        selectedValue={selectedLote}
        onValueChange={(itemValue) => setSelectedLote(itemValue)}
      >
        <RNPicker.Item label="Selecione um lote" value={null} />
        {lotes.map((lote) => (
          <RNPicker.Item key={lote.id_lote} label={lote.descricao} value={lote.id_lote} />
        ))}
      </RNPicker>
      <TextInput
        style={Style.input}
        placeholder="Identificacao do animal"
        value={identificacao}
        onChangeText={setIdentificacao}
      />
      <TouchableOpacity style={Style.button} onPress={handlePressSalvar}>
        <Text style={Style.textBtn}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default reproducao;
