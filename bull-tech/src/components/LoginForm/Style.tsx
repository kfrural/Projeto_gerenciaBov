import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        marginHorizontal: 140,
        marginTop: 60,
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    txtInput: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        display: 'flex',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 40,
      },
    button: {
        marginTop: 50,
        backgroundColor: 'rgba(84, 42, 12, 0.75)',
        borderRadius: 40,
        paddingHorizontal: 75,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'serif',
        letterSpacing: 7,
        fontWeight: 'bold',
      },
    buttonCad: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCad: {
        color: '#333',
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Arial, sans-serif',
    },
    imgIcons: {
        height: 40,
        width: 40,
    },
    imgIcons2: {
        marginRight: 8,
        height: 30,
        width: 30,
    },
});

export default Style;
