import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const App = ({ navigation }) => {
  return (
    <View style={{ flex:  1, padding:  10 }}>
      <Button
        title="Cadastrar Lote"
        onPress={() => navigation.navigate('CadastroAnimais')}
      />
      {/* Aqui você pode listar os lotes já cadastrados */}
    </View>
  );
};

export default App;
