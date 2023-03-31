import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import Logo from '../components/Logo';
import { ScrollView } from 'react-native-gesture-handler';



const LoginScreen = ({ navigation }) => {
  // const fetchData = async() => {
  //   const data = await fetch('http://127.0.0.1:8000/api/login',{email:"salmanmala22@gmail.com"})
  //   console.log('data',data)
  // }
  // useEffect (() => {
  //     fetchData()
  // },[])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
          <View style={{ paddingHorizontal: 25 }}>
            <View style={{ alignItems: 'center' }}>
              <Logo />
            </View>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 28,
                fontWeight: '500',
                color: '#333',
                marginBottom: 30,
              }}>
              Login
            </Text>

            <InputField
              label={'Email ID'}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
            />

            <InputField
              label={'Password'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              fieldButtonLabel={"Forgot?"}
              fieldButtonFunction={() => { }}
            />

            <CustomButton label={"Login"} onPress={() => navigation.navigate('Drawer')} />

            <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
              Or, login with ...
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <GoogleSVG height={24} width={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <FacebookSVG height={24} width={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <TwitterSVG height={24} width={24} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>New to the app?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#105be2', fontWeight: '700' }}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
