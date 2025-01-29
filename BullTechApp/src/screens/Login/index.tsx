import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import style from './styles';
import styles from './styles';
import logo from "../../assets/images/logoBao.png";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import InputPassword from "../../components/InputPassword";
import Button from "../../components/ButtonIndex";

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleChangeEmail = (text: string) => setEmail(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handleSubmit = async() => {
    navigation.navigate("Home");
  }

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
            <Text style={style.title}>
                Login
            </Text>
            <Text style={style.text}>
                Olá! Vamos começar
            </Text>
            <View style={styles.inputContainer}>
            <Icon name="person-outline" size={25} style={styles.icon} />
            <Input
              placeholder="Informe seu e-mail"
              value={email}
              onChangeText={handleChangeEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={25} style={styles.icon} />
            <InputPassword
              placeholder="Informe sua senha"
              value={password}
              onChangeText={handleChangePassword}
            />
          </View>
          <Text>Relembrar</Text>
          <Text>Esqueci a senha</Text>

          <Button
          title="Cadastrar"
          onPress={handleSubmit}
        />

          <Button
          title="ENTRAR"
          onPress={handleSubmit}
        />
        </View>
    )
}