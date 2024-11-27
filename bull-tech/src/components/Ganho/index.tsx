import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../service/supabase';

const RelatorioGanho = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [ganhos, setGanhos] = useState([]);

    useEffect(() => {
        const fetchGanhos = async () => {
            try {
                const { data, error } = await supabase
                    .from('financeiro')
                    .select('*')
                    .eq('tipo', 'ganhos');

                if (error) {
                    throw new Error('Erro ao buscar ganhos: ' + error.message);
                } else {
                    setGanhos(data);
                }
            } catch (error) {
                console.error('Erro ao buscar ganhos:', error);
            }
        };

        fetchGanhos();
    }, []);

    const formatarData = (dataStr) => {
        if (dataStr) {
            const data = new Date(dataStr);
            return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear().toString().slice(2)}`;
        } else {
            return "";
        }
    };

    const calcularTotal = () => {
        return ganhos.reduce((total, item) => total + parseFloat(item.valor), 0);
    };

    return (
        <View style={Style.container}>
            <View style={Style.totalContainer}>
                <Text style={Style.totalLabel}>Total:</Text>
                <Text style={Style.totalValue}>R$ {calcularTotal().toFixed(2)}</Text>
            </View>
            <View style={Style.tableHeader}>
                <Text style={Style.tableHeaderLabel}>Descrição</Text>
                <Text style={Style.tableHeaderLabel}>Valor</Text>
                <Text style={Style.tableHeaderLabel}>Data</Text>
            </View>
            <FlatList
                data={ganhos}
                renderItem={({ item }) => (
                    <View style={Style.tableRow}>
                        <Text style={Style.tableCell}>{item.descricao}</Text>
                        <Text style={Style.tableCell}>R$ {item.valor}</Text>
                        <Text style={Style.tableCell}>{formatarData(item.data)}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default RelatorioGanho;