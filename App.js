// Author: Madelon R. Watanabe
// Class: Mobile Device Apps
// Date: 1/25/2023

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

// I used the pizza translator from https://reactnative.dev/docs/handling-text-input
// as a base for my project as it had the basic elements I wanted to use to begin this project
// I have modified it with my own code to make it do what the assignment wanted
export default function App() {

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const ConcertImage = require('C:/Users/madyl/TicketVault/assets/concert.png');
 //   const [pricePerTicket, setPricePerTicket] = useState(99.99);
    return (
      <View style={{padding: 10}}>
      <Text style={styles.text}>Ticket Vault</Text> 
        <TextInput style={styles.textInput}
          placeholder="Number of Tickets"
          onChangeText={newCount => setCount(newCount)}
          defaultValue={count}
        />
        <Pressable style={styles.button} onPress={() => setPrice(99.99 * count)}>
              <Text style={styles.text}>Find The Cost</Text>
        </Pressable>

  {/* will display an empty string if the price is 0 otherwise it will display a price */}
      <Text style={styles.text}>{price > 0 ? 'Ticket Cost: $' + price.toFixed(2) : '' } </Text>
      <Image source={ConcertImage} style={styles.image} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f98b88',
    
    marginBottom: 10,
  },
  text:{
    padding: 10,
    fontSize: 42,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width:255,
    alignItems: 'center',
  },
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#000000"
  },
  image:{
    
    marginTop: 140,
    alignItems: 'center',
  },
  
});
