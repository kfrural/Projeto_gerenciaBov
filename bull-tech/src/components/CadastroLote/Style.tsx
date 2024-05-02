import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  containerBtn: {
    marginTop: 70,
  },
  txtInput: {
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(84, 42, 12, 0.75)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(84, 42, 12, 0.75)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default Style;
