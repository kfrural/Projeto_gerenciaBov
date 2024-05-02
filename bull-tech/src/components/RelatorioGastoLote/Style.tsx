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
    marginBottom: 50,
    color: '#333',
  },
  itemContainer: {
    paddingVertical: 8,
    marginBottom: 12,
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
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 2, // Linha mais grossa
    borderTopColor: 'rgba(84, 42, 12, 0.5)', // Cor da linha
    paddingTop: 12, // Espaçamento interno
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
});

export default Style;
