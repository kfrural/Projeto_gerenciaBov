import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Style from './Style';
import { useRoute } from '@react-navigation/native';
import { supabase } from '../../service/supabase';
import { useNavigation } from '@react-navigation/native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useUser } from '../../auth/UserContext';

const Vacina = () => {
  const { user } = useUser();
  const route = useRoute();
  const navigation = useNavigation();
  const [nomevacina, setNomeVacina] = useState('');
  const [data, setData] = useState('');
  const [lotes, setLotes] = useState([]);
  const [selectedLote, setSelectedLote] = useState(null);

  useEffect(() => {
    const fetchLotes = async () => {
      try {
        const { data, error } = await supabase
          .from('lotes')
          .select('id_lote, descricao')
          .eq('id_usuario', user.id);

        if (error) {
          console.error('Erro ao buscar lotes: ', error.message);
        } else {
          console.log('Dados dos lotes: ', data);
          setLotes(data);
        }
      } catch (error) {
        console.error('Erro ao buscar lotes: ', error);
      }
    };

    fetchLotes();
  }, [user.id]);

  const handlePressSalvar = async () => {
    try {
      const { data: vacinaData, error: vacinaError } = await supabase
        .from('vacinas')
        .insert([
          {
            id_lote: selectedLote,
            nomevacina,
            data: new Date().toISOString().slice(0, 10),
          },
        ])
        .select('id_vacinas');

      if (vacinaError) {
        console.error('Erro ao adicionar vacina: ', vacinaError.message);
      } else {
        console.log('Vacina adicionada:', vacinaData[0].id_vacinas);

        const { error: eventoError } = await supabase
          .from('eventos')
          .insert([
            {
              id: user.id,
              tipo: 'vacinação',
              id_tipoEvento: vacinaData[0].id_vacinas,
              data: new Date().toISOString().slice(0, 10),
            },
          ]);

        if (eventoError) {
          console.error('Erro ao adicionar evento: ', eventoError.message);
        } else {
          console.log('Evento adicionado');
          setNomeVacina('');
          setData('');
          setSelectedLote(null);
          navigation.goBack();
        }
      }
    } catch (error) {
      console.error('Erro ao adicionar vacina: ', error);
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
        placeholder="Nome da vacina"
        value={nomevacina}
        onChangeText={setNomeVacina}
      />
      <TouchableOpacity style={Style.button} onPress={handlePressSalvar}>
        <Text style={Style.textBtn}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Vacina;
