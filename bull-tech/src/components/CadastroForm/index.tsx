import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Style from './Style';
import { useNavigation } from "@react-navigation/native";
import { supabase } from '../../service/supabase';

const CadastroForm = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([
          { id, nome, sobrenome, telefone, email, senha }
        ]);

      if (error) {
        console.error('Erro ao adicionar usuário:', error.message);
      } else {
        console.log('Usuário adicionado com sucesso!');
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error('Erro ao adicionar usuário:');
    }
  };

  return (
    <View style={Style.container}>
      <View style={Style.inputContainer}>
        <TextInput placeholder='Nome' value={nome} onChangeText={setNome} style={Style.input} />
        <Image source={require('../../assets/usuario.png')} style={Style.imgIcons} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Sobrenome' value={sobrenome} onChangeText={setSobrenome} style={Style.input} />
        <Image source={require('../../assets/usuario.png')} style={Style.imgIcons} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Email' keyboardType="email-address" value={email} onChangeText={setEmail} style={Style.input} />
        <Image source={require('../../assets/email.png')} style={Style.imgIcons2} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Telefone' keyboardType='numeric' value={telefone} onChangeText={setTelefone} style={Style.input} />
        <Image source={require('../../assets/telefone.png')} style={Style.imgIcons} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Usuario' value={id} onChangeText={setId} style={Style.input} />
        <Image source={require('../../assets/usuario.png')} style={Style.imgIcons} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Senha' secureTextEntry value={senha} onChangeText={setSenha} style={Style.input} />
        <Image source={require('../../assets/senha.png')} style={Style.imgIcons2} />
      </View>
      
      <View style={Style.inputContainer}>
        <TextInput placeholder='Confirme a senha' secureTextEntry value={confirmedPassword} onChangeText={setConfirmedPassword} style={Style.input} />
        <Image source={require('../../assets/senha.png')} style={Style.imgIcons2} />
      </View>

      <View style={Style.containerBtn}>
        <TouchableOpacity style={Style.button} onPress={handleSubmit}>
          <Text style={Style.text}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CadastroForm;
