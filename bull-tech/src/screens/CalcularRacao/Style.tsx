import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  Header: {
    flex: 1,
    backgroundColor: '#573A25',
  },
  container: {
    backgroundColor: '#fff',
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    marginTop: 40,
    marginLeft: 30,
  },
  component: {
    backgroundColor: '#846D5C',
    width: 280,
    height: 398,
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 50,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  resultado: {
    backgroundColor: '#D9D9D9',
    height: 50,
    borderRadius: 10,
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#D9D9D9',
    height: 50,
    paddingLeft: 20,
    borderRadius: 10,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginEnd: 20,
  },
});

export default Style;