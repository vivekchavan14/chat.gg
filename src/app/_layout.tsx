import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Redirect, Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const RootNav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially setting it to true for testing

  useEffect(() => {
    const hideSplashScreen = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading time
      await SplashScreen.hideAsync();
      setIsLoading(false);
    };

    // Simulate fetching login status
    const fetchLoginStatus = async () => {
      // Simulating login status
      const loggedInStatus = true; // Set true or false based on login status for testing
      setIsLoggedIn(loggedInStatus);
      console.log('Login status fetched:', loggedInStatus);
    };

    fetchLoginStatus();
    hideSplashScreen();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <View style={styles.container}>
          <Text style={styles.icon}>⚡</Text>
          <Text style={styles.title}>chat.gg</Text>
        </View>
        <ActivityIndicator size="large" color="#3B82F6" style={styles.loadingIndicator} />
      </View>
    );
  }

  console.log('IsLoggedIn state:', isLoggedIn);

  // Routing logic based on isLoggedIn
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Text>Redirecting to Main</Text> {/* Add this for debug visibility */}
          <Redirect href="/(main)" />
        </>
      ) : (
        <>
          <Text>Redirecting to Auth</Text> {/* Add this for debug visibility */}
          <Redirect href="/(auth)" />
        </>
      )}
    </Stack>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  container: {
    alignItems: 'center',
    marginBottom: 20,
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
  loadingIndicator: {
    marginTop: 20,
  },
});

export default RootNav;
