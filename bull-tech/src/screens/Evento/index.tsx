import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Style from "./Style";
import Vacinacao from "../../components/FuncoesEventos/Vacinacao";
import Reproducao from '../../components/FuncoesEventos/Reproducao';
import Pagamentos from '../../components/FuncoesEventos/Pagamentos';
import TrocaFases from '../../components/FuncoesEventos/TrocaFases';
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

export default function Evento() {
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
                <Vacinacao />
                <Reproducao />
                <Pagamentos />
                <TrocaFases />
            </View>

        </>
    )
}
