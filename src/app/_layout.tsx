import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Redirect, Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const RootNav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Renamed to isLoggedIn

  useEffect(() => {
    const hideSplashScreen = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading time
      await SplashScreen.hideAsync();
      setIsLoading(false);
    };

    hideSplashScreen();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <View style={styles.container}>
          <Text style={styles.icon}>⚡</Text> {/* Thunder icon */}
          <Text style={styles.title}>chat.gg</Text>
        </View>
        <ActivityIndicator size="large" color="#3B82F6" style={styles.loadingIndicator} />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown:false }}>
      {isLoggedIn ? (
        <Redirect href={"/(main)"} /> // Redirect to main layout if logged in
      ) : (
        <Redirect href={"/(auth)"} /> // Redirect to auth layout if not logged in
      )}
    </Stack>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Dark background
  },
  container: {
    alignItems: 'center',
    marginBottom: 20,
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
  loadingIndicator: {
    marginTop: 20,
  },
});

export default RootNav;
