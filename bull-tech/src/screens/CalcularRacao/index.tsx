import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import Style from "./Style";
import { useNavigation } from "@react-navigation/native";
import logoImage from "../../assets/seta.png";

const Converter = () => {
    const [peso, setPeso] = useState('');
    const [valorArroba, setValorArroba] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularArroba = () => {
        if (valorArroba === '' || peso === '') {
            setResultado('Digite o peso do animal e o valor da arroba');
        } else {
            const pesoFloat = parseFloat(peso.replace(',', '.'));
            const valorArrobaFloat = parseFloat(valorArroba.replace(',', '.'));

            const arroba = Number((pesoFloat / 32.14).toFixed(2));
            const valor = (arroba * valorArrobaFloat).toFixed(2).replace('.', ',');

            setResultado(`Tem: ${arroba} arrobas\nSeu valor é: R$ ${valor}`);
        }
    };
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
                <View style={Style.component}>
                    <View>
                        <TextInput
                            style={Style.input}
                            placeholder="Peso do animal"
                            keyboardType="numeric"
                            value={peso}
                            onChangeText={(text) => setPeso(text)}
                        />

                        <TextInput
                            style={Style.input}
                            placeholder="Valor da arroba"
                            keyboardType="numeric"
                            value={valorArroba}
                            onChangeText={(text) => setValorArroba(text)}
                        />

                        <TouchableOpacity style={Style.button} onPress={calcularArroba}>
                            <Text style={Style.text}>
                                Calcular Arroba
                            </Text>
                        </TouchableOpacity>

                        {resultado !== '' && (
                            <Text style={Style.resultado}>{resultado}</Text>
                        )}
                    </View>
                </View>
            </View>
        </>
    );
};

export default Converter;
