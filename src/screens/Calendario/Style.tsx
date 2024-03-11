import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    Header: {
        flex: 1,
        backgroundColor: '#573A25',
    },
    container: {
        backgroundColor: '#846D5C',
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendar:{
        borderRadius: 30,
        height: '73%',
        top: '20%',
    },
    button:{
        backgroundColor: 'rgba(84, 42, 12, 0.75)',
        height: 50,
        paddingLeft: 20,
        paddingRight: 10, 
        borderRadius: 10,
        margin: 40,
        marginLeft: 'auto', 
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginEnd: 20,
      },
});

export default Style;
