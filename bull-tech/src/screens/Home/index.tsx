import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./Style";
import CadLote from "../../components/FuncoesHome/CadLote";
import Calendario from "../../components/FuncoesHome/Calendario";
import Convertor from '../../components/FuncoesHome/Convertor';
import CalculaRacao from '../../components/FuncoesHome/CalculaRacao';
import Financa from '../../components/FuncoesHome/Financa';
import logoImage from "../../../assets/logo.png";

export default function Home() {
    return (
        <>
            <View style={Style.Header}>
            <Image style={Style.logo} source={logoImage} />
            </View>
            <View style={Style.container}>
                <CadLote />
                <Calendario />
                <Convertor />
                <CalculaRacao />
                <Financa />
            </View>

        </>
    )
}
