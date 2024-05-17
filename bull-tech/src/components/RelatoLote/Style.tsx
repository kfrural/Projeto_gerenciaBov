import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  table: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(84, 42, 12, 0.75)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 250,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});


export default Style;
