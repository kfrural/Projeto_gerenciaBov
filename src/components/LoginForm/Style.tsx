import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container:{
        margin: '10%'
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        marginTop: '25%',
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderEndColor: 'transparent',
        borderLeftColor: 'transparent',

    },
    buttonCad: {
        marginTop: '12%',
        borderWidth: 1,
        width: '50%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCad: {
        color: '#000',
        fontWeight: '100',
        fontSize: 13,
    },
    button: {
        backgroundColor: 'rgba(84, 42, 12, 0.75)',
        width: '80%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderRadius: 50,
    },
    text: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
    },
});

export default Style;