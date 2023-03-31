import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import InputField from '../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';
import { Formik } from 'formik';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {

  const onSubmit = async (values) => {
    const { ...data } = values;
    console.log(data)
    var config = {
      method: 'POST',
      headers: {
        "Accept": "application/json ",
        'Content-Type': 'multipart/form-data'
      },
      name: data.name,
      email: data.email,
      password: data.password
    };
    await axios.post("https://7aa6-143-44-191-101.ap.ngrok.io", config).then(function (response) {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10, marginTop: 100 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }} bounces={true}>
          <View style={{ paddingHorizontal: 25 }}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 28,
                fontWeight: '500',
                color: '#333',
                marginBottom: 30,
              }}>
              Register
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

            <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
              Or, register with email ...
            </Text>
            <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={onSubmit}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <InputField
                    label={'Full Name'}
                    onChange={handleChange('name')}
                    value={values.name}
                    onBlur={handleBlur('name')}
                    icon={
                      <Ionicons
                        name="person-outline"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5 }}
                      />
                    }
                  />
                  <InputField
                    label={'Email ID'}
                    onChange={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')}
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
                    onChange={handleChange('password')}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    icon={
                      <Ionicons
                        name="ios-lock-closed-outline"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5 }}
                      />
                    }
                    inputType="password"
                  />
                  <CustomButton label={'Register'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>Already registered?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#105be2', fontWeight: '700' }}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
