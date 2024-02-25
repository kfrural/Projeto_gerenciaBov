import React from "react";
import { View,Image } from "react-native";

import Style from "./Style";
import logoImage from "./Calendario.png";

export default function LogoComponent(){
    return(
        <>
                <Image style={Style.logo} source={logoImage} />
        </>
    )
}