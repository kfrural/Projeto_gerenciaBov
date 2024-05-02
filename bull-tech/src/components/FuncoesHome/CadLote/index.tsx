import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Style from "./Style";
import LogoComponent from "./Logo";
import { useNavigation } from "@react-navigation/native";

export default function CadLote() {
    const navigation = useNavigation<any>();
    const handlePress = () => {
        console.log("Botão pressionado");
        navigation.navigate("CadLote");
    };

    return (
        <TouchableOpacity style={Style.container} onPress={handlePress}>
            <LogoComponent />
            <Text style={Style.text}>
                Cadastro de animais
            </Text>
        </TouchableOpacity>
    );
}
