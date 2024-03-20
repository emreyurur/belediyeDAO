import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, PermissionsAndroid, Platform,StyleSheet } from 'react-native';
import Contacts, { Contact } from 'react-native-contacts';

const ContactsList: React.FC = () => {
  // Kişileri saklayacak state
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    requestContactsPermission();
  }, []);

  // Kişileri yükleyen fonksiyon
  const loadContacts = () => {
    Contacts.getAll().then((contacts: Contact[]) => {
      // State'i güncelle
      setContacts(contacts);
    });
  };

  // Erişim izinlerini isteyen fonksiyon
  const requestContactsPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Kişiler Erişimi',
            message: 'Uygulama kişilerinize erişmek için izninize ihtiyaç duyar.',
            buttonNeutral: 'Sonra Sor',
            buttonNegative: 'İptal',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Kişilere erişebilirsiniz.');
          loadContacts(); // İzin verildiyse kişileri yükle
        } else {
          console.log('Kişilere erişim izni reddedildi.');
        }
      } else {
        loadContacts(); // Android dışındaki platformlarda izin gerekmez, doğrudan yükle
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Kişileri gösteren bir FlatList döndüren render fonksiyonu
  const renderItem = ({ item }: { item: Contact }) => (
    <View>
      <Text>{item.displayName}</Text>
    </View>
  );

  return (
    <View>
      <Text>Kişiler Listesi</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ContactsList;
