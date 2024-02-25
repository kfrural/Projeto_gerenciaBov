import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Style from './Style';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handlePress = () => {
    console.log("Botão pressionado");
    navigation.navigate("Cadastro");
  };

  const handleLogin = () => {
    // Aqui você adicionaria a lógica de login
    console.log("Email: ", email);
    console.log("Senha: ", password);
    // Por exemplo, você pode verificar se o email e a senha correspondem a um usuário existente
    // E, se corresponderem, navegar para outra tela
    navigation.navigate("Home");
  };

  return (
    <View style={Style.container}>
      <View style={Style.TextInput}>
        <TextInput placeholder='Email' keyboardType="email-address" value={email} onChangeText={setEmail} />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Senha' secureTextEntry value={password} onChangeText={setPassword} />
      </View>

      <View style={Style.containerBtn}>
        <TouchableOpacity style={Style.buttonCad} onPress={handlePress}>
          <Text style={Style.textCad}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button} onPress={handleLogin}>
          <Text style={Style.text}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
