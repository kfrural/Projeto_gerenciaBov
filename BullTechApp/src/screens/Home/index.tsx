import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import style from './styles';
import logo from "../../assets/images/logoBao.png";

export default function Login() {
  const navigation = useNavigation();

  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

    return (
        <View style={style.container}>
            <Text>Hone</Text>
        </View>
    )
}