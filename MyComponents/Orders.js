import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";



export const Orders = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems:"center", marginTop: 100}}>
      <FontAwesome style={{ marginTop: 17 }}
        name="cart-arrow-down"
        size={100}
      />
      </View>
      <Text style={{textAlign:"center", fontSize: 20, marginTop:20}}>We are waiting to deliver your first order.</Text>
      <Text style={{textAlign:"center", fontSize: 20, marginBottom:20}}>Shop premium watches.</Text> 
      <Pressable style={styles.button} onPress={() => (navigation.navigate("Women"))}>
              <Text style={styles.text}>Continue Shopping</Text>
      </Pressable>
      </View>

  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginStart:70,
    marginEnd: 70
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

