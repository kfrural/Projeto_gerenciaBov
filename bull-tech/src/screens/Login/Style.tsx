import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
  arco: {
    flex: 1,
    backgroundColor: '#573A25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '90%',
    width: '200%',
    padding: 100,
    borderRadius: 380,
  },
  title: {
    color: '#000',
    fontWeight: '200',
    letterSpacing: 0.5,
    fontSize: 50,
    marginTop: '10%',
    marginLeft: '25%',
  },
  text: {
    color: '#000',
    fontWeight: '100',
    fontSize: 18,
    marginTop: '2%',
    marginLeft: '25%',
  },
});

export default Style;