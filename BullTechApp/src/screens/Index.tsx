import React from "react";
import { View, Image } from "react-native";
import logo from "../assets/images/logoBao.png"

export default function Index() {
    return (
        <View>
            <Image source={logo} />
        </View>
    )
}