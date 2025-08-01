import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function EligibilityScreen({ route, navigation }) {
  const { userData } = route.params;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoanOptions', { userData });
    }, 2000); // mock eligibility check
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checking Eligibility...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
