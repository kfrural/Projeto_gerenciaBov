import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import Style from "./Style";
import { Picker as RNPicker } from '@react-native-picker/picker';

const CalcularRacao = () => {
    const [tipoAnimal, setTipoAnimal] = useState('');
    const [qtd, setQtd] = useState('');
    const [resultado, setResultado] = useState([]);

    const calcularRacao = () => {
        if (qtd === '' || tipoAnimal === '') {
            setResultado([{ ingrediente: 'Digite a quantidade de animais e selecione a fase', quantidade: '' }]);
        } else {
            const quantidadeAnimais = parseInt(qtd);
            const consumoDiario = 3; // kg
            const composicaoRacao = 0;

            const consumoTotalDiario = consumoDiario * quantidadeAnimais;

            let ingredientes = [];

            if (tipoAnimal === 'lactacao') {
                ingredientes = [
                    { ingrediente: 'Milho', quantidade: 0.4 },
                    { ingrediente: 'Farelo de Soja', quantidade: 0.2 },
                    { ingrediente: 'Farelo de Trigo', quantidade: 0.1 },
                    { ingrediente: 'Casca de Soja', quantidade: 0.1 },
                    { ingrediente: 'Farinha de Alfafa', quantidade: 0.05 },
                    { ingrediente: 'Melaço de Cana', quantidade: 0.05 },
                    { ingrediente: 'Calcário', quantidade: 0.05 },
                    { ingrediente: 'Fosfato Bicálcico', quantidade: 0.03 },
                    { ingrediente: 'Sal', quantidade: 0.02 },
                ];
            } else if (tipoAnimal === 'engorda') {
                ingredientes = [
                    { ingrediente: 'Milho', quantidade: 0.5 },
                    { ingrediente: 'Farelo de Soja', quantidade: 0.2 },
                    { ingrediente: 'Farelo de Trigo', quantidade: 0.05 },
                    { ingrediente: 'Casca de Soja', quantidade: 0.1 },
                    { ingrediente: 'Melaço de Cana', quantidade: 0.05 },
                    { ingrediente: 'Calcário', quantidade: 0.05 },
                    { ingrediente: 'Fosfato Bicálcico', quantidade: 0.03 },
                    { ingrediente: 'Sal', quantidade: 0.02 },
                ];
            }

            const resultadoCalculo = ingredientes.map(item => ({
                ingrediente: item.ingrediente,
                quantidade: ((item.quantidade * consumoTotalDiario) * 30).toFixed(2) + ' kg'
            }));

            setResultado(resultadoCalculo);
        }
    };

    return (
        <View style={Style.container}>
            <View style={Style.component}>
                <RNPicker
                    style={Style.input}
                    selectedValue={tipoAnimal}
                    onValueChange={(itemValue) => setTipoAnimal(itemValue)}
                >
                    <RNPicker.Item label="Selecione o tipo" value={null} />
                    <RNPicker.Item label="Lactação" value="lactacao" />
                    <RNPicker.Item label="Engorda" value="engorda" />
                </RNPicker>

                <TextInput
                    style={Style.input}
                    placeholder="quantidade de animais"
                    keyboardType="numeric"
                    value={qtd}
                    onChangeText={(text) => setQtd(text)}
                />

                <TouchableOpacity style={Style.button} onPress={calcularRacao} >
                    <Text style={Style.buttonText}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>

            {resultado.length > 0 && (
                <View style={Style.resultContainer}>
                    <FlatList
                        data={resultado}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={Style.resultRow}>
                                <Text style={Style.resultText}>{item.ingrediente}</Text>
                                <Text style={Style.resultText}>{item.quantidade}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </View >
    );
};

export default CalcularRacao;
