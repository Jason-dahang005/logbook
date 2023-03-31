import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import OrganizationList from '../components/OrganizationList';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="OrganizationList" component={OrganizationList} />
      <Stack.Screen name="Drawer" component={DrawerNav} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'
      drawerContent={props =>
        <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerLabelStyle: {
          marginLeft: 25,
          fontSize: 15
        },
        overlayColor: 'transparent',
      }}>

      <Drawer.Screen name="Home" component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline"
              size={22} color={"#1D46DA"} />),
        }}
      />

      <Drawer.Screen name="Messages" component={MessagesScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbox-ellipses-outline"
              size={22} color={"#1D46DA"} />),
        }}

      />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline"
              size={22} color={"#1D46DA"} />),
        }}

      />
    </Drawer.Navigator>
  );
};
export default AppStack;