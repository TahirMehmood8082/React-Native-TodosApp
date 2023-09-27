import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#1e90ff',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 30,
  },
  mainView: {
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  addBtn: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: 'center',
  },
  addBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listTodosView: {
    backgroundColor: '#1e90ff',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  listTodosTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    flex: 1,
  },
  emptyListImg: {
    height: 300,
    width: 300,
  },
});

export default styles;