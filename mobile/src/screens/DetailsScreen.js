import React from 'react'
import { View, Text ,Image} from 'react-native'

const DetailsScreen = ({route}) => {
    const {item} = route.params;
  return (
    <View style={{flex:1}}>
      <Image source ={item.poster} style={{width:400,height:300}} />
      <View style={{alignItems:'center', padding:10}}>
        <Text style={{fontSize:30}}>{item.subtitle}</Text>
        <Text>{item.title}</Text>
        <Text>{item.time}</Text>
      </View>
    </View>
  )
}
export default DetailsScreen