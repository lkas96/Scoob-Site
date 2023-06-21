import { View, Text} from 'react-native'
import React from 'react'

const ChildInfoPage = ({route}) => {

  return (
    <View>
      <Text style={{fontSize:20, fontWeight: 'bold',}}>Name: {route.params.childInfo.name}</Text>
      <Text style={{fontSize:20, fontWeight: 'bold',}}>NRIC: {route.params.childInfo.id}</Text>
    </View>
  )
}

export default ChildInfoPage