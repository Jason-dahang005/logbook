import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ListItem(props) {

  const {
    photo,
    subTitle,
    title,
    onPress,
    buttonTab
  } = props

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Image
          source={photo}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>
      {buttonTab == 1 && (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            padding: 5,
            width: 35,
            borderRadius: 50,
            alignItems: 'center'
          }}>
            <FontAwesome5 name="pen" size={15} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={{
            padding: 5,
            width: 35,
            borderRadius: 50,
            alignContent: 'center'
          }}>
            <FontAwesome5 name="eye" size={20} color="#0aada8" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 5,
            width: 35,
            borderRadius: 50,
            alignItems: 'center'
          }}>
            <FontAwesome5 name="trash" size={20} color="#F9210B" />
          </TouchableOpacity>
        </View>)}
      {buttonTab == 2 && (
        <TouchableOpacity onPress={onPress} style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 60,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Text style={{
            fontWeight: 'bold',
            color:'white'
          }}>View</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
