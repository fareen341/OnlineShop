import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Ionicons from 'react-native-vector-icons/Ionicons';



export const AccountDetails = () => {
  return (
    <View style={{ marginTop: 20}}>
      <View style={{ alignItems: 'center', marginBottom:50  }}>        
        <Image
          style={{ borderRadius: 290 / 2, height: 100, width: 100 }}
          source={require('../assets/profile.png')}
        />
        <Text style={{color:"grey"}}>Change Profile
        <Ionicons
              name="pencil"
              size={15}
            />
        </Text>
      </View>

      <View style={{ flexDirection: "row", }}>
        <View style={{width:"45%", marginRight: 5, marginLeft: 5}}>
        <Text>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value="Fareen"
          />
        </View>
        <View style={{width:"45%", marginRight: 5, marginLeft: 5}}>
        <Text>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Ansari"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", }}>
        <View style={{width:"45%", marginRight: 5, marginLeft: 5}}>
        <Text>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <View style={{width:"45%", marginRight: 5, marginLeft: 5}}>
        <Text>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>
      </View>
      <View style={{width:"93%", marginRight: 5, marginLeft: 5}}>
        <Text>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <Pressable style={styles.button} onPress="">
              <Text style={styles.text}>Update</Text>
      </Pressable>  
    </View>
  )
}
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
    padding: 7,
    color:"grey",
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
