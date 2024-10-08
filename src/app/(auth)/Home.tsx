import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import axios from 'axios'; // Import Axios

const Home = () => {
  const [contacts, setContacts] = useState([]); // State for contacts
  const [registeredUsers, setRegisteredUsers] = useState([]); // State for registered users

  // Function to request contacts permission and fetch contacts
  const requestContactsPermission = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need access to your contacts to find friends.');
      return false;
    }
    return true;
  };

  const fetchContacts = async () => {
    const permissionGranted = await requestContactsPermission();
    if (permissionGranted) {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      // Extract phone numbers and send to backend
      const phoneNumbers = data
        .map(contact => contact.phoneNumbers?.[0]?.number)
        .filter(Boolean); // Filter out any undefined numbers

      if (phoneNumbers.length > 0) {
        checkRegisteredContacts(phoneNumbers);
      }
    }
  };

  const checkRegisteredContacts = async (phoneNumbers) => {
    try {
      const response = await axios.post('http://localhost:8000/check-contacts', {
        phone_numbers: phoneNumbers,
      });

      if (response.status === 200) {
        setRegisteredUsers(response.data); // Update state with registered users
      } else {
        Alert.alert('Error', 'Failed to fetch registered contacts.');
      }
    } catch (error) {
      console.error('Error checking registered contacts:', error);
      Alert.alert('Error', 'An error occurred while checking registered contacts.');
    }
  };

  useEffect(() => {
    fetchContacts(); // Fetch contacts on component mount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat List</Text>
      <FlatList
        data={registeredUsers}
        keyExtractor={(item) => item.phoneNumber} // Use a unique key
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem}>
            <Text style={styles.contactText}>{item.username}</Text>
            <Text style={styles.contactText}>{item.phoneNumber}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  contactText: {
    color: '#fff',
  },
});

export default Home;
