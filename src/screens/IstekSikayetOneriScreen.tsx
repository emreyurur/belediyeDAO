import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IstekSikayetOneriButton from '../components/IstekSikayetOneriButton'

interface ButtonProps {
    text: string;
    onPress: () => void;
    loading: boolean;
    buttonColor: string;
  }
  
  const IstekSikayetOneriScreen = () => {
    const navigation = useNavigation(); // navigation nesnesini useNavigation hook'u ile alıyoruz

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Belediye DAO</Text>
            <Text style={styles.description}>İstek, şikayet ve önerilerinizi belirtebilirsiniz.</Text>
            <IstekSikayetOneriButton 
                text="İstek" 
                onPress={() => navigation.navigate("IstekScreen")} // onPress için bir fonksiyon geçiyoruz
                loading={false} 
                buttonColor="#FFD700" 
            />
            <IstekSikayetOneriButton 
                text="Şikayet" 
                onPress={() => navigation.navigate("SikayetScreen")} 
                loading={false} 
                buttonColor="#FF6347" 
            />
            <IstekSikayetOneriButton 
                text="Öneri" 
                onPress={() => navigation.navigate("OneriScreen")} 
                loading={false} 
                buttonColor="#32CD32" 
            />
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontStyle:"italic"
  },
});

export default IstekSikayetOneriScreen;