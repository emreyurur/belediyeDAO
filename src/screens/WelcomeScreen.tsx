import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CategoriesButton from "../components/CategoriesButton";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const newLocal = 'IstekSikayetOneriScreen';
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Belediye DAO</Text>
            <CategoriesButton text="İstek-Şikayet-Öneri" onPress={() => navigation.navigate("IstekSikayetOneriScreen")
            } loading={false} />
            <CategoriesButton text="Halka Açık Oylamalar" onPress={() => navigation.navigate('VotingScreen')
            } loading={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    button: {

    },
})

export default WelcomeScreen;