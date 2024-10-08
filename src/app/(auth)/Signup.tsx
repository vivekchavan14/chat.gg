import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import Axios
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

const Signup = () => {
  // State variables to handle form input
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  // Function to handle form submission
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', {
        username,
        password,
        phone_number : phoneNumber,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully! Please login.');
        // Optionally redirect to login or another screen
        router.push('/')
      } else {
        Alert.alert('Error', 'Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'An error occurred during signup.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat.gg Symbol */}
      <View style={styles.header}>
        <Text style={styles.icon}>⚡</Text> {/* Thunder icon */}
        <Text style={styles.title}>chat.gg</Text> {/* Title */}
      </View>

      {/* Username input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername} // Handle input change
      />

      {/* Phone Number input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber} // Handle input change
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Handle input change
      />

      {/* Signup button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}> {/* Call handleSignup on press */}
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Link to Login */}
      <Text style={styles.signupPrompt}>
        Already have an account?{' '}
        <Link href="/" style={styles.signupLink}>
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
    backgroundColor: '#000',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 100,
    color: '#3B82F6',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333',
    color: '#fff',
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
