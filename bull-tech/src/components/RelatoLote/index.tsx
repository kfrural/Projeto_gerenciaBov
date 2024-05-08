import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../service/supabase';

const DetalhesLote = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lote } = route.params;

  const [updatedLote, setUpdatedLote] = useState(lote);

  useEffect(() => {
    const fetchUpdatedLote = async () => {
      try {
        const { data, error } = await supabase
          .from('lotes')
          .select('*')
          .eq('id_lote', lote.id_lote)
          .single();

        if (error) {
          throw new Error('Erro ao buscar lote atualizado: ' + error.message);
        } else {
          setUpdatedLote(data);
        }
      } catch (error) {
        console.error('Erro ao buscar lote atualizado:', error);
      }
    };

    fetchUpdatedLote();
  }, [lote.id_lote]);

  const handlePressAddGastos = () => {
    console.log("Botão pressionado para adicionar gastos");
    navigation.navigate("AddGastoLote", { lote: updatedLote });
  };

  const handlePressRelatorio = () => {
    console.log("Botão pressionado para ver relatório de gastos");
    navigation.navigate("RelatorioGasto", { lote: updatedLote });
  };

  const handlePressVenderLote = () => {
    console.log("Botão pressionado para venderLote");
    navigation.navigate("VenderLote", { lote: updatedLote });
  };

  const formatarData = (dataStr) => {
    const data = new Date(dataStr);
    return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear().toString().slice(2)}`;
  };

  return (
    <ScrollView contentContainerStyle={Style.scrollContainer}>
      <View style={Style.container}>
        <View style={Style.section}>
          <Text style={Style.label}>Descrição:</Text>
          <Text style={Style.text}>{updatedLote.descricao}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Quantidade:</Text>
          <Text style={Style.text}>{updatedLote.quantidade}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Peso Total na Compra:</Text>
          <Text style={Style.text}>{updatedLote.peso_total_compra}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Peso Total Vendido:</Text>
          <Text style={Style.text}>{updatedLote.peso_total_vendido}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Valor Pago:</Text>
          <Text style={Style.text}>{updatedLote.valor_pago}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Valor Vendido:</Text>
          <Text style={Style.text}>{updatedLote.valor_vendido}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Saldo Final:</Text>
          <Text style={Style.text}>{updatedLote.saldo_final}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Data:</Text>
          <Text style={Style.text}>{formatarData(updatedLote.data)}</Text>
        </View>
        <View style={Style.section}>
          <Text style={Style.label}>Data Vendido:</Text>
          <Text style={Style.text}>{formatarData(updatedLote.data_vendido)}</Text>
        </View>
        <View style={Style.containerBtn}>
          <TouchableOpacity style={Style.button} onPress={handlePressAddGastos}>
            <Text style={Style.textBtn}>
              Adicionar gastos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Style.containerBtn}>
          <TouchableOpacity style={Style.button} onPress={handlePressRelatorio}>
            <Text style={Style.textBtn}>
              Relatório de gastos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Style.containerBtn}>
          <TouchableOpacity style={Style.button} onPress={handlePressVenderLote}>
            <Text style={Style.textBtn}>
              Vender Lote
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetalhesLote;
