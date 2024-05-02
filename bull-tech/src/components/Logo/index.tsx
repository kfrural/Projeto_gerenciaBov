import React from "react";
import { View,Image } from "react-native";

import { Style } from "./Style";
import logoImage from "../../../assets/logo.png";

export default function LogoComponent(){
    return(
        <>
            <View style={Style.component}>
                <Image style={Style.logo} source={logoImage} />
            </View>
        </>
    )
}