import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const chatData = [
  { id: '1', name: 'John Doe', lastMessage: 'Hello!' },
  { id: '2', name: 'Jane Smith', lastMessage: 'How are you?' },
  { id: '3', name: 'Mike Johnson', lastMessage: 'See you soon!' },
];

const Home = () => {
  const renderChatItem = ({ item }: { item: { id: string; name: string; lastMessage: string } }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background
    padding: 10,
  },
  chatItem: {
    padding: 20,
    backgroundColor: '#333', // Chat item background
    borderRadius: 10,
    marginBottom: 10,
  },
  chatName: {
    fontSize: 18,
    color: '#fff', // White text
    fontWeight: '600',
  },
  lastMessage: {
    color: '#aaa', // Light gray for last message
    marginTop: 5,
  },
});

export default Home;
