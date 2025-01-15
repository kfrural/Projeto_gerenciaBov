import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import style from './styles';

export default function Login() {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Login
            </Text>
            <Text style={style.text}>
                Olá! Vamos começar
            </Text>
        </View>
    )
}