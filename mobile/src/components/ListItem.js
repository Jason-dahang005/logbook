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
      <TouchableOpacity onPress={onPress} style={{
        backgroundColor: '#0aada8',
        padding: 10,
        width: 35,
        borderRadius: 50,
        alignSelf: 'center'
      }}>
        <FontAwesome5 name="eye" size={12} color="black" />
      </TouchableOpacity>
      {buttonTab == 1 && (
        <TouchableOpacity style={{
          backgroundColor: '#F9210B',
          padding: 10,
          width: 35,
          borderRadius: 50,
          alignItems: 'center'
        }}>
          <FontAwesome5 name="trash" size={12} color="#fff" />
        </TouchableOpacity>)}
      {buttonTab == 1 && (
        <TouchableOpacity style={{
          padding: 10,
          width: 35,
          borderRadius: 50,
          alignItems: 'center'
        }}>
          <FontAwesome5 name="feather" size={10} color="black" />
        </TouchableOpacity>)}
    </View>
  );
}
