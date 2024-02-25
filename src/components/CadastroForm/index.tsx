import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Style from './Style';
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../Services/firebaseConfig';
//import { doc, setDoc } from "firebase/firestore";   
//import { db } from '../../Services/firebaseConfig';

export default function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (password !== confirmedPassword) {
      console.log("As senhas não coincidem.");
      return;
    }

   /* createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Salvar os dados do usuário no Firestore
      const userRef = doc(db, "users", user.uid);
      setDoc(userRef, {
        nome,
        sobrenome,
        email,
        telefone,
        // Adicione outros campos conforme necessário
      }).then(() => {
        navigation.navigate("Home");
      }).catch((error) => {
        console.log("Erro ao salvar os dados do usuário: ", error);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });*/
  }; 

  const handlePress = () => {
    console.log("Botão pressionado");
    navigation.navigate("Cadastro");
  };

  return (
    <View style={Style.container}>
      <View style={Style.TextInput}>
        <TextInput placeholder='Nome' value={nome} onChangeText={(val) => {
          setNome(val);
        }} />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Sobrenome' value={sobrenome} onChangeText={(val) => {
          setSobrenome(val);
        }} />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Email' keyboardType="email-address" value={email} onChangeText={(val) => {
          setEmail(val);
        }} />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Telefone' keyboardType='numeric' value={telefone} onChangeText={(val) => {
          setTelefone(val);
        }} />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Senha' secureTextEntry  
          value={password}  
          onChangeText={(val) => {
            setPassword(val);
          }}  />
      </View>
      <View style={Style.TextInput}>
        <TextInput placeholder='Confirme a senha'secureTextEntry  
          value={confirmedPassword}  
          onChangeText={(val) => {
            setConfirmedPassword(val);
          }} />
      </View>

      <View style={Style.containerBtn}>
        <TouchableOpacity style={Style.button} onPress={handleLogin}>
          <Text style={Style.text}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
