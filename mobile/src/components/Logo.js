import React from 'react'
import { StyleSheet,Image } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/images/homescreen/fligno.png')} style={style.logo} />
}
style=StyleSheet.create({
logo:{
  width: 100,
  height: 100,
  margin: 20,
  alignSelf:'center',
  marginTop: 150,
}
})