import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: '#105be2',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  )
} 
export default CustomButton
