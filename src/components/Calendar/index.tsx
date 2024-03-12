import React, { useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";
import Style from "./Style";


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
    const [selectedDate, setSelectedDate] = useState('');
    const navigation = useNavigation();

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
        navigation.navigate('Evento');// aqui pode ser editar evento se evento !=0
        console.log('Data selecionada:', day.dateString);
    };

    const navigateToEvento = () => {
        navigation.navigate('Evento');
    };


    return (
        <>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
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