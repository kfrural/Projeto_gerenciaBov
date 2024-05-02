import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
  arco: {
    flex: 1,
    backgroundColor: '#573A25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: 'auto',
    width: '75%',
    padding: 20,
    borderRadius: 40,
  },
  title: {
    color: '#000',
    fontWeight: '200',
    letterSpacing: 0.5,
    fontSize: 50,
    marginTop: '10%',
    marginLeft: '10%',
  },
  text: {
    color: '#000',
    fontWeight: '100',
    fontSize: 18,
    marginTop: '2%',
    marginLeft: '10%',
  },
});

export default Style;