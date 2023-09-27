import { View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import todoStyle from '../todoStyle/TodoStyle'
import { IconButton } from 'react-native-paper'
import FallBack from '../components/FallBack';

const dummyData = [
  {
    id: "01",
    title: "Wash Car",
  },
  {
    id: "02",
    title: "Read A book",
  },
];
const TodoScreen = () => {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [editedTodo, setEditedTodo] = useState(null)
  const handleAddTodo = ()=>{
    if(todo === ""){
      return 
    }
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}])
    setTodo("")
  }
  const handleEditTodo = (todo)=>{
    setEditedTodo(todo)
    setTodo(todo.title)
  }
  const handleDeleteTodo = (id)=>{
    const updatedTodoList = todoList.filter((todo)=> todo.id !== id)
    setTodoList(updatedTodoList)
  }
  const handleUpdateTodo = ()=>{
    const updatedTodos = todoList.map((item)=>{
      if(item.id == editedTodo.id){
        return {...item, title: todo}
      }
      return item
    })
    setTodoList(updatedTodos)
    setEditedTodo(null)
    setTodo("")
  }
  const renderTodos = ({item, index})=>{
    return(
      <View style={todoStyle.listTodosView}>
        <Text style={todoStyle.listTodosTxt}>{item.title}</Text>
        <IconButton 
          icon="pencil" 
          iconColor='#6B6B6B'
          onPress={() => handleEditTodo(item)}
        />
        <IconButton 
          icon="trash-can" 
          iconColor='#FF0000'
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    )
  }
  return (
    <SafeAreaView>
      <View style={todoStyle.mainView}>
        
        <TextInput 
          style={todoStyle.input}
          placeholder='Add a task'
          placeholderTextColor= 'gray'
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />

        { 
        editedTodo?
          <TouchableOpacity 
            style={todoStyle.addBtn}
            onPress={()=> handleUpdateTodo()}
          >
            <Text style={todoStyle.addBtnTxt}>Update</Text>
          </TouchableOpacity>
         :
          <TouchableOpacity 
            style={todoStyle.addBtn}
            onPress={()=> handleAddTodo()}
          >
            <Text style={todoStyle.addBtnTxt}>Add</Text>
          </TouchableOpacity>
         
        }
        <FlatList 
          data={todoList}
          renderItem={renderTodos}
        />
        {todoList.length <= 0 && <FallBack/>}
      </View>
    </SafeAreaView>
  )
}

export default TodoScreen