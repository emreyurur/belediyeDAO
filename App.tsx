import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();

import WelcomeScreen from "./src/screens/WelcomeScreen";
import VotingScreen from "./src/screens/VotingScreen";
import IstekSikayetOneriScreen from "./src/screens/IstekSikayetOneriScreen";
import IstekScreen from "./src/screens/Istek/IstekScreen";
import SikayetScreen from "./src/screens/Sikayet/SikayetScreen";
import OneriScreen from "./src/screens/Oneri/OneriScreen";
import ContactsList from "./src/screens/ContactList";
import PhantomWallet from "./src/screens/PhantomWallet";

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="IstekSikayetOneriScreen" component={IstekSikayetOneriScreen}/>
        <Stack.Screen name="VotingScreen" component={VotingScreen}/>
        <Stack.Screen name="IstekScreen" component={IstekScreen}/>
        <Stack.Screen name="SikayetScreen" component={SikayetScreen}/>
        <Stack.Screen name="OneriScreen" component={OneriScreen}/> */}
        {/* <Stack.Screen name="ContactsList" component={ContactsList}/> */}
        <Stack.Screen name="PhantomWallet" component={PhantomWallet}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;