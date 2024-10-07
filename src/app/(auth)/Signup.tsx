import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AuthLayout from './_layout'; 

const Signup = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginPrompt}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => console.log('Navigate to Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333', // Darker input background
    color: '#fff', // White text
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginPrompt: {
    color: '#fff',
    marginTop: 20,
  },
  loginLink: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});

export default Signup;
