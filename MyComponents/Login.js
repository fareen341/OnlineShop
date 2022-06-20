import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


export const Login = () => (
  <View style={styles.container}>
    <Text style={{fontSize: 30}}>Welcome,</Text>
    <Text style={{fontSize: 20, color: "#A0A0A0"}}>Sign in to continue</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      keyboardType="numeric"
    />
    <Pressable><Text style={{textAlign: "right", marginBottom: 10}}>Forget Password?</Text></Pressable>
    <Pressable style={[styles.button, { marginBottom: 10 }]} onPress="">
      <Text style={styles.text}>Sign In</Text>
    </Pressable>

    <Pressable><Text style={{textAlign: "center", marginTop: 10}}>Don't have an account?</Text></Pressable>
    <Text style={{textAlign: "center",color: "blue"}}>Register Here</Text>
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
