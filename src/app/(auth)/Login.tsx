import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AuthLayout from './_layout';

const Login = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupPrompt}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => console.log('Navigate to Signup')}>
          Sign up
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
  signupPrompt: {
    color: '#fff',
    marginTop: 20,
  },
  signupLink: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});

export default Login;
