import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundColor: '#846D5C',
        margin: 10,
        borderRadius: 15,
        paddingVertical: 45,
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        height: 43,
        width: 43,
        marginRight: 20,
    },
    logoLote: {
        height: 53,
        width: 53,
        marginRight: 20,
    },
});

export default Style;
