import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./Style";
import Vacinacao from "../../components/FuncoesEventos/Vacinacao";
import Reproducao from '../../components/FuncoesEventos/Reproducao';
import Pagamentos from '../../components/FuncoesEventos/Pagamentos';
import TrocaFases from '../../components/FuncoesEventos/TrocaFases';
import logoImage from "../../../assets/logo.png";

export default function Home() {
    return (
        <>
            <View style={Style.Header}>
            <Image style={Style.logo} source={logoImage} />
            </View>
            <View style={Style.container}>
                <Vacinacao />
                <Reproducao />
                <Pagamentos />
                <TrocaFases />
            </View>

        </>
    )
}
