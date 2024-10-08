import { Stack } from 'expo-router';
import React from 'react';

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Chat List' }} />
      {/* You can add other screens like Chat Details here */}
    </Stack>
  );
};

export default MainLayout;
