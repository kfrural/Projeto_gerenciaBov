import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, FlatList, Text } from 'react-native';
import { supabase } from '../../service/supabase';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';

const EdicaoEvento = () => {
    const route = useRoute();
    const { events } = route.params;
    const [eventDetails, setEventDetails] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const eventDetailsData = await Promise.all(
                    events.map(async (event) => {
                        let tableName = '';
                        let idColumn = '';
                        let typeField = '';
                        let eventName = '';
                        let loteDescription = '';

                        switch (event.tipo) {
                            case 'vacinação':
                                tableName = 'vacinas';
                                idColumn = 'id_vacinas';
                                typeField = 'nomevacina';
                                eventName = 'Vacina';
                                break;
                            case 'pagamento':
                                tableName = 'pagamentos';
                                idColumn = 'id_pagamento';
                                typeField = 'identificacao';
                                eventName = 'Pagamento/Recebimento';
                                break;
                            case 'troca_fase':
                                tableName = 'troca_fases';
                                idColumn = 'id_troca_fase';
                                typeField = 'fase';
                                eventName = 'Troca de fase';
                                break;
                            case 'reproducao':
                                tableName = 'reproducao';
                                idColumn = 'id_reproducao';
                                typeField = 'identificacao';
                                eventName = 'Reprodução';
                                break;
                            default:
                                tableName = ''; // Defina o comportamento padrão ou trate outros tipos de eventos
                        }

                        if (tableName && idColumn) {
                            const { data, error } = await supabase.from(tableName).select('*').eq(idColumn, event.id_tipoEvento);

                            if (error) {
                                console.error(`Erro ao buscar informações do evento na tabela ${tableName}:`, error.message);
                                return null;
                            } else if (data && data.length > 0) {
                                let eventData = {
                                    eventName: eventName,
                                    tipo: data[0][typeField],
                                    data: event.data,
                                };

                                if (tableName === 'vacinas' || tableName === 'troca_fases' || tableName === 'reproducao') {
                                    const { data: loteData, error: loteError } = await supabase.from('lotes').select('descricao').eq('id_lote', data[0].id_lote).single();
                                    if (loteError) {
                                        console.error(`Erro ao buscar informações do lote:`, loteError.message);
                                    } else if (loteData) {
                                        eventData.loteDescription = loteData.descricao;
                                    }
                                }

                                return eventData;
                            } else {
                                console.error(`Dados vazios para o evento na tabela ${tableName}`);
                                return null;
                            }
                        } else {
                            console.error('Tipo de evento não suportado:', event.tipo);
                            return null;
                        }
                    })
                );

                setEventDetails(eventDetailsData.filter(Boolean));
            } catch (error) {
                console.error('Erro ao buscar detalhes dos eventos:', error);
            }
        };

        fetchEventDetails();
    }, [events]);

    const formatData = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    };

    return (
        <View style={Style.container}>
            <FlatList
                data={eventDetails}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={Style.eventItem}>
                        <Text style={Style.eventTitle}>{item.eventName}</Text>
                        <Text style={Style.eventType}>{item.tipo}</Text>
                        <Text style={Style.eventDescription}>{item.loteDescription}</Text>
                        <Text style={Style.eventDate}>{formatData(item.data)}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default EdicaoEvento;
