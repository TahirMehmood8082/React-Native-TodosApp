import { View, Text, Image } from 'react-native'
import React from 'react'
import TodoStyle from '../todoStyle/TodoStyle'

const FallBack = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image 
        source={require('../../assets/empty-todoList.png')}
        style={TodoStyle.emptyListImg}
      />
      <Text>Start Adding Your Tasks</Text>
    </View>
  )
}

export default FallBack