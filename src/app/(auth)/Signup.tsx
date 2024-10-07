import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation

const Signup = () => {
  return (
    <View style={styles.container}>
      {/* Chat.gg Symbol */}
      <View style={styles.header}>
        <Text style={styles.icon}>⚡</Text> {/* Thunder icon */}
        <Text style={styles.title}>chat.gg</Text> {/* Title */}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad" // Set keyboard type to phone pad
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text> {/* Corrected button text */}
      </TouchableOpacity>
      <Text style={styles.signupPrompt}>
        Already have an account?{' '}
        <Link href="/" style={styles.signupLink}> {/* Use Link for navigation */}
          Login
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000', // Dark background
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 100,
    color: '#3B82F6', // Thunder icon color
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff', // White text
  },
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

export default Signup;
