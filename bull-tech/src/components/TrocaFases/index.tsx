import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Style from './Style';
import { useRoute } from '@react-navigation/native';
import { supabase } from '../../service/supabase';
import { useNavigation } from '@react-navigation/native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useUser } from '../../auth/UserContext';

const troca_fase = () => {
  const { user } = useUser();
  const route = useRoute();
  const navigation = useNavigation();
  const [fase, setFase] = useState('');
  const [data, setData] = useState('');
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
      const { data: troca_faseData, error: troca_faseError } = await supabase
        .from('troca_fases')
        .insert([
          {
            id_lote: selectedLote,
            fase,
            data: new Date().toISOString().slice(0, 10),
          },
        ])
        .select('id_troca_fase');
  
      if (troca_faseError) {
        console.error('Erro ao adicionar troca_fase: ', troca_faseError.message);
      } else {
        console.log('troca_fase adicionada:', troca_faseData[0].id_troca_fase);
  
        const { error: eventoError } = await supabase
          .from('eventos')
          .insert([
            {
              id: user.id,
              tipo: 'troca_fase',
              id_tipoEvento: troca_faseData[0].id_troca_fase,
              data: new Date().toISOString().slice(0, 10),
            },
          ]);
  
        if (eventoError) {
          console.error('Erro ao adicionar evento: ', eventoError.message);
        } else {
          console.log('Evento adicionado');
          setFase('');
          setData('');
          setSelectedLote(null);
          navigation.goBack();
        }
      }
    } catch (error) {
      console.error('Erro ao adicionar troca_fase: ', error);
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

  <RNPicker
    style={Style.input}
    selectedValue={fase}
    onValueChange={(itemValue) => setFase(itemValue)}
  >
    <RNPicker.Item label="Selecione a fase" value={null} />
    <RNPicker.Item label="Cria" value="cria" />
    <RNPicker.Item label="Recria" value="recria" />
    <RNPicker.Item label="Engorda" value="engorda" />
  </RNPicker>

  <TouchableOpacity style={Style.button} onPress={handlePressSalvar}>
    <Text style={Style.textBtn}>Salvar</Text>
  </TouchableOpacity>
</View>
  );
};

export default troca_fase;
