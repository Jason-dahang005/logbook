import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Date from './CustomDate';

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }} >
      <DrawerContentScrollView {...props}>
        
        <ImageBackground
          source={require('../assets/images/Pic/blue.jpg')}
          style={{ padding: 20 }}>
          <Image
            source={require('../assets/images/Pic/Alberto_conversi_profile_pic.jpg')}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              marginBottom: 5,
            }}>
            Salman
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
              7:30 am
            </Text>
            <FontAwesome5 name="clock" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 5, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => (LoginScreen)} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer