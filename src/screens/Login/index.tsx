import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import Style from './Style';
import LoginForm from "../../components/LoginForm";

export default function Login() {
    return (
        <View style={Style.arco}>
            <View style={Style.container}>
                <Text style={Style.title}>
                    Login
                </Text>
                <Text style={Style.text}>
                    Olá! Vamos começar
                </Text>
                <LoginForm />
            </View>
        </View>
    )
}

