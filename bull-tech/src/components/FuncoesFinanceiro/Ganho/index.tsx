import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Style from "./Style";
import LogoComponent from "./Logo";
import { useNavigation } from "@react-navigation/native";

export default function Ganho() {
    const navigation = useNavigation<any>();
    const handlePress = () => {
        console.log("Botão pressionado");
        navigation.navigate('Ganho');
    };

    return (
        <TouchableOpacity style={Style.container} onPress={handlePress}>
            <LogoComponent />
            <Text style={Style.text}>
                Ganhos
            </Text>
        </TouchableOpacity>
    );
}
