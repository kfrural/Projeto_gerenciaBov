import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Style from "./Style";
import Pagar from "../../components/Pagamentos";
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

export default function VenderLote() {
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
                <Pagar />
            </View>

        </>
    )
}
