import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import database from '@react-native-firebase/database';
import Message from '../../components/Message';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  uid: string;
  clicks: number;
}

const SikayetScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = database().ref('/sikayetler/');
    const onValueChange = messagesRef.on('value', (snapshot) => {
      const rawData = snapshot.val() || {};
      const parsedData = parseContentData(rawData);
      setMessages(parsedData);
    });

    return () => messagesRef.off('value', onValueChange);
  }, []);

  const parseContentData = (rawData: { [key: string]: any }) => {
    const parsedData = Object.keys(rawData).map((key) => ({
      id: key,
      text: rawData[key].text,
      timestamp: new Date(rawData[key].timestamp),
      uid: rawData[key].uid,
      clicks: rawData[key].clicks || 0,
    }));

    return parsedData.sort((a, b) => b.clicks - a.clicks);
  };

  const handleSend = () => {
    if (newMessage.trim().length > 0) {
      const messagesRef = database().ref('/sikayetler/');
      const newMessageRef = messagesRef.push();

      const uid = "exampleUID";

      newMessageRef.set({
        text: newMessage,
        uid: uid,
        clicks: 0,
        timestamp: Date.now(),
      }).then(() => {
        console.log("Message saved successfully!");
        setNewMessage('');
      }).catch((error) => {
        console.error("Message could not be saved: ", error);
      });
      
    } else {
      console.error("Message text is empty.");
    }
  };


  const handleItemClick = (itemId: string) => {
    const messageRef = database().ref(`/sikayetler/${itemId}`);
    messageRef.transaction((currentData) => {
      if (currentData) {
        currentData.clicks = currentData.clicks + 1 || 1;
      }
      return currentData;
    });
  };

  const renderItem = ({ item }: { item: Message }) => (
    <Message
      id={item.id}
      text={item.text}
      timestamp={item.timestamp.getTime()}
      clicks={item.clicks}
      onItemClick={() => handleItemClick(item.id)}
    />
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Şikayetleriniz</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer} // FlatList içeriğine stil vermek için
        ListHeaderComponent={<View style={styles.divider} />} // Listeyi başlıktan ayırmak için bir divider ekleyebilirsiniz
      />
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Şikayetlerinizi buraya yazın..."
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          onSubmitEditing={handleSend}
        />

        <Button title="Gönder" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#E8E8E8', // Arka plan rengi
    padding: 20, // İç padding
    width: '100%', // Genişlik
    alignItems: 'center', // İçerikleri ortala
    justifyContent: 'center',
    borderBottomWidth: 1, // Alt çizgi
    borderBottomColor: '#D1D1D1', // Alt çizginin rengi
  },
  headerText: {
    textAlign: "center",
    fontSize: 30, // Font büyüklüğünü artır
    fontWeight: "bold",
  },
  listContainer: {
    flexGrow: 1, // FlatList'in tüm alanı kaplamasını sağlar
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D1D1',
    width: '100%',
    marginBottom: 10, // Divider altından bir boşluk bırak
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginRight: 8,
    textAlignVertical: 'top', // Yazıların yukarıdan başlamasını sağlar
  },
});

export default SikayetScreen;