import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Style from './Style';
import CadastroForm from "../../components/CadastroForm";

export default function Cadastro() {
    return (
        <View style={Style.arco}>
            <View style={Style.container}>
                <CadastroForm />
            </View>
        </View>
    )
}

