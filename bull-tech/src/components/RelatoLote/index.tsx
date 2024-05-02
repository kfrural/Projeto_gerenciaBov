import React, { useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';

const DetalhesLote = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lote } = route.params;

  console.log(lote.id_lote);

  const handlePressAddGastos = () => {
    console.log("Botão pressionado para adicionar gastos");
    navigation.navigate("AddGastoLote", { lote });
  };

  const handlePressRelatorio = () => {
    console.log("Botão pressionado para ver relatório de gastos");
    navigation.navigate("RelatorioGasto", { lote });
  };
  const handlePressVenderLote = () => {
    console.log("Botão pressionado para venderLote");
    navigation.navigate("VenderLote", { lote });
  };

  const formatarData = (dataStr) => {
    const data = new Date(dataStr);
    return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear().toString().slice(2)}`;
  };

  return (
    <View style={Style.container}>
      <View style={Style.section}>
        <Text style={Style.label}>Descrição:</Text>
        <Text style={Style.text}>{lote.descricao}</Text>
      </View>
      <View style={Style.section}>
        <Text style={Style.label}>Quantidade:</Text>
        <Text style={Style.text}>{lote.quantidade}</Text>
      </View>
      <View style={Style.section}>
        <Text style={Style.label}>Peso Total na Compra:</Text>
        <Text style={Style.text}>{lote.peso_total_compra}</Text>
      </View>
      <View style={Style.section}>
        <Text style={Style.label}>Valor Pago:</Text>
        <Text style={Style.text}>{lote.valor_pago}</Text>
      </View>
      <View style={Style.section}>
        <Text style={Style.label}>Data:</Text>
        <Text style={Style.text}>{formatarData(lote.data)}</Text>
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
  );
};

export default DetalhesLote;
