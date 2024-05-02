import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Style from "./Style";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function Index() {

    const navigation = useNavigation<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login', {}, { replace: true });//TEM Q FICAR NO LOGIN
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={Style.container}>
            <View>
                <Logo />
            </View>
            <Text style={Style.title}>Bull Tech</Text>
            <Text style={Style.text}>O sistema capaz de fazer o controle de vendas e pesagem de bovinos.</Text>
        </View>
    )
}

