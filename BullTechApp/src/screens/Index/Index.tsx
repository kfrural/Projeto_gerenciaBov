import React, { useEffect } from "react";
import { View, Image } from "react-native";
import logo from "../../assets/images/logoBao.png";
import style from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Index() {
    const navigation = useNavigation<any>();

    useEffect(() =>{
        const timer = setTimeout(() =>{
            navigation.navigate('Login', {}, {replace: true});
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />
        </View>
    )
}