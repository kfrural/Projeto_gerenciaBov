import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import supabase from '../../service/supabase';
import { useUser } from '../../auth/UserContext';
import mais from '../../assets/mais.png';
import LogoLote from '../../assets/LogoLote.png';

type Lote = {
  id: number;
  nome: string;
  descricao: string;
};

const CadLote = () => {
  const { user } = useUser();
  const [lotes, setLotes] = useState<Lote[]>([]);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchLotes = async () => {
      try {
        const { data, error } = await supabase
          .from('lotes')
          .select('*')
          .eq('id_usuario', user.id);

        if (error) {
          console.error('Erro ao buscar lotes:', error.message);
        } else {
          setLotes(data);
        }
      } catch (error) {
        console.error('Erro ao buscar lotes:', error);
      }
    };

    fetchLotes();
  }, [user.id]);

  const adicionarLote = () => {
    const novoId = lotes.length === 0 ? 1 : Math.max(...lotes.map(lote => lote.id)) + 1;
    const novoLote: Lote = { id: novoId, nome: `Lote ${novoId}` };
    setLotes(prevLotes => [...prevLotes, novoLote]);
  };

  const handleLotePress = (lote: Lote) => {
    console.log("botao pressionado RelatoLote");
    navigation.navigate('RelatoLote', { lote });
  };

  const handlePress = () => {
    console.log("Botão pressionado CadLoteNovo");
    adicionarLote();
    navigation.navigate("CadLoteNovo");
  };

  const renderItem = ({ item }: { item: Lote }) => (
    <TouchableOpacity  onPress={() => handleLotePress(item)}>
      <View style={Style.container}>
        <Text style={Style.text}>{item.descricao}</Text>
        <Image style={Style.logoLote} source={LogoLote} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={Style.container} onPress={handlePress}>
        <Text style={Style.text}>
          Cadastrar Lote
        </Text>
        <Image style={Style.logo} source={mais} />
      </TouchableOpacity>
      <FlatList
        data={lotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CadLote;
