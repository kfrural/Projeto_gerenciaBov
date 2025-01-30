import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import style from './styles';
import styles from './styles';
import logo from "../../assets/images/logoBao.png";
//import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import InputPassword from "../../components/InputPassword";
import Button from "../../components/ButtonIndex";

export default function Login() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleChangeEmail = (text: string) => setEmail(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

//   const handleSubmit = async (e: React.FormEvent | null) => {
//     e?.preventDefault();

//     if (!email || !password) {
//       setError("Por favor, preencha todos os campos");
//       return;
//     }

//     try {
//       await authService.login(email, password);
//       navigation.navigate("Home");
//     } catch (error) {
//       console.error("Erro ao fazer login:", error);

//       if (error instanceof Error && error.message.includes('invalid email')) {
//         setError("Email inválido");
//       } else if (error instanceof Error && error.message.includes('invalid password')) {
//         setError("Senha incorreta");
//       } else if (error instanceof Error && error.message.includes('user does not exist')) {
//         setError("Usuário não encontrado");
//       } else {
//         setError("Erro de autenticação");
//       }
//     }
//   };
    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />
            
            <View style={styles.inputContainer}>
            <Input
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input
              placeholder="e-mail"
              value={email}
              onChangeText={handleChangeEmail}
            />
            <Input
              placeholder="Telefone"
              value={telefone}
              onChangeText={setTelefone}
            />
            <Input
              placeholder="Usuario"
              value={user}
              onChangeText={setUser}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputPassword
              placeholder="Senha"
              value={password}
              onChangeText={handleChangePassword}
            />
            <InputPassword
              placeholder="COnfirme sua senha"
              value={password}
              onChangeText={handleChangePassword}
            />
          </View>

          <Button
          title="ENTRAR"
          onPress={() => handlePress("Home")}
        />
        </View>
    )
}