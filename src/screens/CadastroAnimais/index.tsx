import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from '@react-native-firebase/database';

const LoteCadastro = ({ navigation }) => {
  const [descricao, setDescricao] = useState('');

  const salvarLote = () => {
    const newLote = { descricao };
    // Aqui você salvaria os detalhes no Firebase
    // Por exemplo: database().ref('/lotes').push(newLote);
    // Após salvar, você pode voltar para a tela principal
    navigation.goBack();
  };

  return (
    <View style={{ padding:  10 }}>
      <TextInput
        placeholder="Descrição do Lote"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Salvar" onPress={salvarLote} />
    </View>
  );
};

export default LoteCadastro;
