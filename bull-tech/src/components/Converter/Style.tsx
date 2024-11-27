import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
component: {
    backgroundColor: '#846D5C',
    width: 300,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 50,
},
input: {
    backgroundColor: '#D9D9D9',
    height: 50,
    width: '100%',
    paddingLeft: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
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
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
},
buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
},
resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    elevation: 5,
},
});

export default Style;