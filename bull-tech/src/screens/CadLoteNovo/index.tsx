import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Style from './Style';
import CadastroLote from "../../components/CadastroLote";
import logoImage from "../../assets/seta.png";
import { useNavigation } from "@react-navigation/native";

export default function CadatrarLote() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={Style.container}>
            <View style={Style.Header}>
            <TouchableOpacity onPress={handleGoBack}>
                    <Image style={Style.logo} source={logoImage} />
                </TouchableOpacity>
            </View>

            <CadastroLote />

        </View>
    )
}
