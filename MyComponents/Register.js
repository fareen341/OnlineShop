import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


export const Register = () => (
  <View style={styles.container}>
    <Text style={{fontSize: 30}}>Register Here</Text>
    <TextInput
      style={styles.input}
      placeholder="Firstname"
    />
    <TextInput
      style={styles.input}
      placeholder="Lastname"
    />
    <TextInput
      style={styles.input}
      placeholder="Username"
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
    />
    <Pressable style={[styles.button, { marginBottom: 10 }]} onPress="">
      <Text style={styles.text}>Register</Text>
    </Pressable>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 7
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
