import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 40,
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    txtInput: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(84, 42, 12, 0.75)',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    button: {
        marginTop: 10,
        backgroundColor: 'rgba(84, 42, 12, 0.75)',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    buttonCad: {
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCad: {
        color: '#333',
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Arial, sans-serif',
    },
});

export default Style;
