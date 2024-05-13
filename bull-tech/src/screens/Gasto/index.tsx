import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Style from "./Style";
import Gastos from "../../components/Gasto";
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

export default function Gasto() {
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
                <Gastos />
            </View>

        </>
    )
}
