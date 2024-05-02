import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container:{
        margin: 10,
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        marginTop: '10%',
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderEndColor: 'transparent',
        borderLeftColor: 'transparent',

    },
    button: {
        backgroundColor: 'rgba(84, 42, 12, 0.75)',
        width: '80%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: '10%',
    },
    text: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
    },
});

export default Style;