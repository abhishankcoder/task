//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Splash from './Screen/Splash/Index';
import Signup from './Screen/Signup/Index';
import Home from './Screen/Home/Index';
import Login from './Screen/Login/Index';
import Images from './Constant/Images';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import MyStore from './Screen/redux/MyStore';
import Employee from './Screen/Employee/Index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',

        },
      }}>
      <Tab.Screen
        name="King"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.homeView}>
                <Image
                  style={{ tintColor: focused ? '#FFAC1C' : 'black' }}
                  source={Images.Home}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View style={styles.labelView}>
                <Text style={styles.labelText}>home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Employee"
        component={Employee}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.labelView}>
                <Image
                  style={[styles.icon, { tintColor: focused ? '#FFAC1C' : 'black' }]}
                  source={Images.User}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Employee</Text>
              </View>
            );
          },
        }}
      />

    </Tab.Navigator>
  );
}
// create a component
const MyComponent = () => {
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />

          <Stack.Screen name="Signup" component={Signup} />


          <Stack.Screen name="Employee" component={Employee} />



          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  homeView: { alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  labelView: { alignItems: 'center', justifyContent: 'center' },
  labelText: { color: 'black', textAlign: 'center' },
  icon: {
    width: 25,
    height: 25
  }
});

//make this component available to the app
export default MyComponent;
