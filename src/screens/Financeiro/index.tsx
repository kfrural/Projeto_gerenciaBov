import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./Style";
import Ganho from "../../components/FuncoesFinanceiro/Ganho";
import Gasto from '../../components/FuncoesFinanceiro/Gasto';
import Saldo from '../../components/FuncoesFinanceiro/Saldo';
import logoImage from "../../../assets/logo.png";

export default function Home() {
    return (
        <>
            <View style={Style.Header}>
            <Image style={Style.logo} source={logoImage} />
            </View>
            <View style={Style.container}>
                <Ganho />
                <Gasto />
                <Saldo />
            </View>

        </>
    )
}
