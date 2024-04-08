import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native"; 
import { Button } from 'react-native-paper';

export default function Home({navigation}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

const [result, setResult] = useState('')
  

  return (
    <View style={styles.container}>
      <Text>WELCOME {result}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setName}
        placeholder="Ad"
      />

      <TextInput 
      style={styles.inputStyle}
       placeholder="Soyad"
       onChangeText={setSurname}
       
       />

      <TextInput
        style={styles.inputStyle}
        keyboardType="phone-pad"
        placeholder="Telefon"
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.inputStyle}
        keyboardType="email-address"
        placeholder="E-posta adresinizi giriniz..."
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Şifrenizi Giriniz..."
        secureTextEntry
      />

     
       <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("SecondPage",{name,surname,phone})} >
    Kaydet
  </Button>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputStyle: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
    height: 50,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  button:{
    width:"80%",
    marginVertical:30,
  }
});


