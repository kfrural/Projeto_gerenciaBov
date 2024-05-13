import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../service/supabase';

const RelatorioSaldo = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        const fetchGastos = async () => {
            try {
                const { data, error } = await supabase
                    .from('financeiro')
                    .select('*');

                if (error) {
                    throw new Error('Erro ao buscar gastos: ' + error.message);
                } else {
                    setGastos(data);
                }
            } catch (error) {
                console.error('Erro ao buscar gastos:', error);
            }
        };

        fetchGastos();
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
        const totalGanhos = gastos.filter((item) => item.tipo === 'ganhos').reduce((total, item) => total + parseFloat(item.valor), 0);
        const totalGastos = gastos.filter((item) => item.tipo === 'gastos').reduce((total, item) => total + parseFloat(item.valor), 0);
        
        return totalGanhos - totalGastos;
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
                data={gastos}
                renderItem={({ item }) => (
                    <View style={Style.tableRow}>
                        <Text style={Style.tableCell}>{item.descricao}</Text>
                        <Text style={Style.tableCell}>{formatarData(item.data)}</Text>
                        <Text style={Style.tableCell}>{item.tipo === 'gastos' ? `- R$ ${item.valor}` : `R$ ${item.valor}`}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default RelatorioSaldo;
