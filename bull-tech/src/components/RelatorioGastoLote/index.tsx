import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { supabase } from '../../service/supabase';
import { useRoute } from '@react-navigation/native';

const RelatorioGastoLote = () => {
  const route = useRoute();
  if (!route.params) {
    console.error('Parâmetros da rota não definidos');
    return null;
  }
  const { lote } = route.params;

  const navigation = useNavigation();
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState(0);

  useEffect(() => {
    const fetchGastos = async () => {
      if (lote) {
        const { data, error } = await supabase
          .from('financeiro_lote')
          .select('*')
          .eq('id_lote', lote.id_lote);

        if (error) {
          console.error('Erro ao obter gastos:', error);
        } else {
          setGastos(data);
          const total = data.reduce((acc, curr) => acc + curr.valor, 0);
          setTotalGastos(total);
        }
      }
    };

    fetchGastos();
  }, [lote]);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Relatório de Gastos do Lote</Text>
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
        <Text style={Style.totalText}>Total: R$ {totalGastos}</Text>
      </View>
    </View>
  );
};

export default RelatorioGastoLote;
