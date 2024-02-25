import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./Style";
import CadLote from "../../components/FuncaoCadLote";
import logoImage from "../../../assets/logo.png";

export default function Home() {
    return (
        <>
            <View style={Style.Header}>
            <Image style={Style.logo} source={logoImage} />
            </View>
            <View style={Style.container}>
                <CadLote />
            </View>

        </>
    )
}
