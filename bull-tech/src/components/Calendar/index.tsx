import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";
import Style from "./Style";
import { supabase } from '../../service/supabase';
import { useUser } from '../../auth/UserContext';
import * as Notifications from 'expo-notifications';



LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
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

    // Busca os eventos do usuário no Supabase
    useEffect(() => {
        const fetchUserEvents = async () => {
            try {
                const { data, error } = await supabase
                    .from('eventos')
                    .select('*')
                    .eq('id', user.id);

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

    useEffect(() => {
        const interval = setInterval(async () => {
            const today = new Date();
            const fiveDaysFromNow = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);

            Object.keys(userEvents).forEach(async (date) => {
                const eventDate = new Date(date);
                if (eventDate.getTime() === fiveDaysFromNow.getTime()) {
                    const events = userEvents[date];
                    events.forEach(async (event) => {
                        await sendNotification(event.tipo, event.data);
                    });
                }
            });
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, [userEvents]);

    async function sendNotification(tipo, data) {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: `${tipo} está com data marcada para daqui a 5 dias`,
                body: `O evento está marcado para ${data}`,
            },
            trigger: {
                seconds: 5 * 24 * 60 * 60,
            },
        });
    }

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
        const eventsOnSelectedDate = userEvents[day.dateString] || [];
        if (eventsOnSelectedDate.length > 0) {
            // Navega para a tela de edição de evento, passando os eventos do dia selecionado FALTA ESSE TREM AINDA
            navigation.navigate('EdtEventos', { events: eventsOnSelectedDate });
        } else {
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
                ...(Object.keys(userEvents).reduce((acc, date) => {
                    acc[date] = { marked: true, dotColor: 'green' };
                    return acc;
                }, {})),
                [selectedDate]: { selected: true, selectedColor: 'red' },
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