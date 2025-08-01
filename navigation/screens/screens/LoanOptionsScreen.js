import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const options = [
  { amount: 5500, fee: 100 },
  { amount: 7800, fee: 120 },
  { amount: 9800, fee: 140 },
  { amount: 11200, fee: 180 },
  { amount: 16800, fee: 200 },
  { amount: 21200, fee: 220 },
];

export default function LoanOptionsScreen({ navigation, route }) {
  const [selected, setSelected] = useState(null);
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Loan Option</Text>
      {options.map((opt, index) => (
        <TouchableOpacity key={index} style={[styles.option, selected === opt ? styles.selected : {}]} onPress={() => setSelected(opt)}>
          <Text>Ksh {opt.amount} - Fee: Ksh {opt.fee}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Get My Loan Now" onPress={() => selected && navigation.navigate('Payment', { selected, userData })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  option: { padding: 15, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
  selected: { backgroundColor: '#d0e8ff' },
});
