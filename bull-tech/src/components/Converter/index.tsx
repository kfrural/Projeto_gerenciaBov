import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import Style from "./Style";

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

    return (
        <View style={Style.container}>
            <View style={Style.component}>
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
                    <Text style={Style.buttonText}>
                        Calcular Arroba
                    </Text>
                </TouchableOpacity>

                {resultado !== '' && (
                    <View style={Style.resultContainer}>
                        <Text style={Style.resultado}>{resultado}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Converter;
