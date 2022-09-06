import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Login,
  Otp,
  SignUp,
  Dashboard,
  AddVehicle,
  InputVehicle,
  News,
  ListVehicle,
  RegisCompleted,
  NewsDetails,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListVehicle"
        component={ListVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputVehicle"
        component={InputVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisCompleted"
        component={RegisCompleted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
