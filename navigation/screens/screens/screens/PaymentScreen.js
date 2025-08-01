import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function PaymentScreen({ route, navigation }) {
  const { selected, userData } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initiateSTKPush = async () => {
      try {
        const res = await axios.post('https://payhero.co.ke/api/stkpush', {
          phone: userData.phone,
          amount: selected.fee,
          description: 'Loan Processing Fee',
          account: userData.name,
        });
        setLoading(false);
        Alert.alert("STK Push Sent", "Check your phone to complete the payment.");
      } catch (error) {
        Alert.alert("Error", "Failed to send STK Push.");
        setLoading(false);
      }
    };

    initiateSTKPush();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Text>Sending STK Push...</Text> : <Button title="Done" onPress={() => navigation.navigate('Signup')} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center', alignItems: 'center', flex: 1 },
});
