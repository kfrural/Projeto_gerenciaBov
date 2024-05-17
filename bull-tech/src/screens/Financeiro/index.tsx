import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Style from "./Style";
import Ganho from "../../components/FuncoesFinanceiro/Ganho";
import Gasto from '../../components/FuncoesFinanceiro/Gasto';
import Saldo from '../../components/FuncoesFinanceiro/Saldo';
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

export default function Financeiro() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <>
            <View style={Style.Header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image style={Style.logo} source={logoImage} />
                </TouchableOpacity>
            </View>
            <View style={Style.container}>
                <Ganho />
                <Gasto />
                <Saldo />
            </View>

        </>
    )
}
