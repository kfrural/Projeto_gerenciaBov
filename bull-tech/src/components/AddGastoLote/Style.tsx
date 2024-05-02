import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'rgba(84, 42, 12, 0.75)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(84, 42, 12, 0.75)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'rgba(84, 42, 12, 0.75)',
  },
  saveButton: {
    backgroundColor: 'rgba(84, 42, 12, 0.75)',
  },
  itemContainer: {
    marginTop: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(84, 42, 12, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  itemValue: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  section: {
    marginBottom: 20,
  },
});

export default Style;
