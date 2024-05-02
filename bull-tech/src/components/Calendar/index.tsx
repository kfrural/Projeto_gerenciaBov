import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";
import Style from "./Style";
import { supabase } from '../../service/supabase';
import { useUser } from '../../auth/UserContext';


LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt-br';

const Calendario = () => {
    const { user } = useUser();
    const [selectedDate, setSelectedDate] = useState('');
    const [userEvents, setUserEvents] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUserEvents = async () => {
            try {
                const { data, error } = await supabase
                    .from('eventos')
                    .select('*')
                    .eq('id_usuario', user.id);

                if (error) {
                    console.error('Erro ao buscar eventos:', error.message);
                } else {
                    const eventsByDate = data.reduce((acc, event) => {
                        const dateString = new Date(event.data).toISOString().slice(0, 10);
                        if (!acc[dateString]) {
                            acc[dateString] = [];
                        }
                        acc[dateString].push(event);
                        return acc;
                    }, {});
                    setUserEvents(eventsByDate);
                }
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        fetchUserEvents();
    }, [user.id]);

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
        const eventsOnSelectedDate = userEvents[day.dateString] || [];
        if (eventsOnSelectedDate.length > 0) {
            // Navegar para a tela de edição de evento, passando os eventos do dia selecionado
            navigation.navigate('Evento', { events: eventsOnSelectedDate });
        } else {
            // Navegar para a tela de criação de novo evento, passando a data selecionada
            navigation.navigate('Evento', { selectedDate: day.dateString });
        }
    };

    const navigateToEvento = () => {
        navigation.navigate('Evento', { selectedDate: selectedDate });
    };

    return (
        <>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    ...userEvents,
                    [selectedDate]: { selected: true, selectedColor: 'blue' },
                }}
                style={Style.calendar}
            />
            <TouchableOpacity style={Style.button} onPress={navigateToEvento}>
                <Text style={Style.text}>
                    Novo evento
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default Calendario;