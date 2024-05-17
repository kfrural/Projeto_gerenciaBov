import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Style from "./Style";
import CadLote from "../../components/FuncaoCadLote";
import logoImage from "../../assets/seta.png";
import { useNavigation } from "@react-navigation/native";


export default function CadLotes() {
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
                <CadLote />
            </View>
        </>
    );
}
