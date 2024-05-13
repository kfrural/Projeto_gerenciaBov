import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Style from "./Style";
import CalcularRacao from "../../components/CalcularRacao";
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

export default function CalculaRacao() {
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
                <CalcularRacao />
            </View>
        </>
    )
}