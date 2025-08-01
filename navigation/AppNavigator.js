import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import EligibilityScreen from '../screens/EligibilityScreen';
import LoanOptionsScreen from '../screens/LoanOptionsScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Eligibility" component={EligibilityScreen} />
    <Stack.Screen name="LoanOptions" component={LoanOptionsScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
