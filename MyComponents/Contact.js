import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const Contact = ({navigation}) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate("Login")} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    buttonText: {
      fontSize: 42,
    },
  });
  