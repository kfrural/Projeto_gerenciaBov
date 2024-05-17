import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container:{
        marginHorizontal: 140,
        marginTop: 20,
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      marginTop: '5%',
    },
    input: {
      flex: 1,
      marginLeft: 10,
      paddingVertical: 5,
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
        letterSpacing: 5,
        fontWeight: 'bold',
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
