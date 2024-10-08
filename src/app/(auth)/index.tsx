import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import Axios
import { Link } from 'expo-router'; 
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Login = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  const router = useRouter();

  // Function to handle login submission
  const handleLogin = async () => {
    try {
      const payload = {
        username: username,
        password: password,
      };

      // Send POST request to Go backend's login endpoint
      const response = await axios.post('http://localhost:8000/login', payload);

      if (response.status === 200) {
        const { token } = response.data; // Extract token from response
        await AsyncStorage.setItem('jwtToken', token); // Store token in AsyncStorage
        Alert.alert('Success', 'Logged in successfully!');
        router.push('/Home'); // Redirect to main screen or chat screen upon successful login
      } else {
        Alert.alert('Error', 'Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat.gg Symbol */}
      <View style={styles.header}>
        <Text style={styles.icon}>⚡</Text> {/* Thunder icon */}
        <Text style={styles.title}>chat.gg</Text> {/* Title */}
      </View>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername} // Update username state
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Update password state
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}> {/* Call handleLogin on press */}
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <Text style={styles.signupPrompt}>
        Don't have an account?{' '}
        <Link href="/Signup" style={styles.signupLink}>
          Sign up
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

export default Login;
