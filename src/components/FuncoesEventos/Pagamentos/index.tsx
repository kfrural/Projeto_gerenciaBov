import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Style from "./Style";
import LogoComponent from "./Logo";

export default function CadLote() {
    const handlePress = () => {
        console.log("Botão pressionado");
        // Coloque aqui a lógica que você quer executar quando o botão for pressionado
    };

    return (
        <TouchableOpacity style={Style.container} onPress={handlePress}>
            <LogoComponent />
            <Text style={Style.text}>
                Pagamentos
            </Text>
        </TouchableOpacity>
    );
}
