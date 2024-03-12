import React from 'react';
import { View} from 'react-native';
import Calendar from "../../components/Calendar";
import Style from "./Style";

export default function CalendarioEvento() {
    return (
        <View style={Style.Header}>
            <View style={Style.container}>
                <Calendar />
            </View>
        </View>
    )
}