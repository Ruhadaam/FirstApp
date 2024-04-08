import { View, Text } from 'react-native'
import React from 'react'

const SecondPage = ({route,navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text> Hoşgeldin {route.params.name} {route.params.surname}</Text>
    </View>
  )
}

export default SecondPage