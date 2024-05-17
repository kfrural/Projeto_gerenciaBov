import React, { createContext, useState, useContext, ReactNode } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { supabase } from '../../service/supabase';
import { useUser } from '../../auth/UserContext';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { setUser } = useUser();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id', id)
        .eq('senha', password)
        .single();

      if (error) {
        console.error('Erro ao fazer login:', error.message);
      } else if (data) {
        const user = {
          id: data.id,
        };
        setUser(user);
        navigation.navigate('Home', { userId: user.id });
        console.log('ID do usuário:', user.id);
      } else {
        console.log('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handlePress = () => {
    console.log("Botão pressionado");
    navigation.navigate("Cadastro");
  };

  return (
    <View style={Style.container}>
  <View style={Style.inputContainer}>
    <TextInput
      style={Style.txtInput}
      placeholder='Usuário'
      value={id}
      onChangeText={setId}
    />
    <Image source={require('../../assets/usuario.png')} style={Style.imgIcons} />
  </View>
  
  <View style={Style.inputContainer}>
    <TextInput
      style={Style.txtInput}
      placeholder='Senha'
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Image source={require('../../assets/senha.png')} style={Style.imgIcons2} />
  </View>

  <View style={Style.containerBtn}>
    <TouchableOpacity style={Style.buttonCad} onPress={handlePress}>
      <Text style={Style.textCad}>CRIAR CONTA</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Style.button} onPress={handleLogin}>
      <Text style={Style.text}>ENTRAR</Text>
    </TouchableOpacity>
  </View>
</View>

  );
}

export default Login;
