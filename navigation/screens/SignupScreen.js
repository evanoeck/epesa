import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';

export default function SignupScreen({ navigation }) {
  return (
    <Formik
      initialValues={{ name: '', phone: '', id: '' }}
      onSubmit={(values) => {
        navigation.navigate('Eligibility', { userData: values });
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput placeholder="Name" style={styles.input} onChangeText={handleChange('name')} value={values.name} />
          <TextInput placeholder="Phone Number" style={styles.input} onChangeText={handleChange('phone')} value={values.phone} keyboardType="phone-pad" />
          <TextInput placeholder="ID Number" style={styles.input} onChangeText={handleChange('id')} value={values.id} />
          <Button title="Check Eligibility" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15 },
});
