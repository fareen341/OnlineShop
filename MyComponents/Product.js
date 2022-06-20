import React, { useEffect } from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter } from '../Features/counter';
import axios from 'axios';
import { setRecords } from '../Features/getProduct';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



export const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const init = useSelector((state) => state.counter.value);
  const prod = useSelector((state) => state.getProduct.value);

  useEffect(() => {
    axios.get("http://192.168.0.114:8000/api/productapi/")
      .then((response) => {
        dispatch(setRecords(response.data));
        console.log("api call");
      })
      .catch(error => {
        console.log("error:", error)
      });
  }, []);

  const handleClick = () => {
    dispatch(changeCounter(init + 1));
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{width:"49%"}}>
            <Pressable style={styles.button} onPress="">
              <Text style={styles.text}>Filter</Text>
            </Pressable>
          </View>

          <View style={{width:"49%"}}>
            <Pressable style={styles.button} onPress="">
              <Text style={styles.text}>Featured</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.mainview}>
          {
            prod.map((curElem) => {
              const { id, product_name, regular_price, product_image, sale_price, product_desc, color_name, prod_brand } = curElem
              let x = product_image;
              let new_product_name = product_name.substring(0, 15) + "..."
              let new_product_desc = product_desc.substring(0, 21) + "..."
              return (

                <View key={id} style={styles.box1}>
                  <TouchableHighlight
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('SingleProduct', {
                        itemId: id,
                      });
                    }}
                  >
                    <Image
                      style={{ height: 200, width: 173 }}
                      source={{
                        uri: x,
                      }}
                    />
                  </TouchableHighlight>

                  <View style={styles.box2}>
                    <Text style={{ textTransform: 'capitalize' }}>{new_product_name}</Text>
                    <Text style={{ color: "#A0A0A0" }}>{new_product_desc}</Text>
                    <Text style={{ fontWeight: "bold" }}>Only ₹{regular_price}</Text>
                    <Text style={{ textTransform: 'capitalize', }}>Brand: {prod_brand}</Text>
                    <Text>id:{id}</Text>
                  </View>


                </View>
              )
            })
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  )
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
  mainview: {
    // flex: 1,
    flexDirection: 'row',
    rowGap: "5px",
    alignItems: 'flex-start',
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  box1: {
    // backgroundColor: "pink",
    width: '45%',
    margin: "2%",
    borderColor: '#ddd',
    borderWidth: 2,
    // paddingTop: "5",
    // paddingRight: "5",
    // paddingBottom: "5",
    // paddingLeft: "5%",
  },
  box2: {
    // backgroundColor: "blue",
    paddingTop: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
  },
  box3: {
    backgroundColor: "green",
  },
  box4: {
    backgroundColor: "cyan",
  },
  box5: {
    backgroundColor: "pink",
  },
  box6: {
    backgroundColor: "cyan",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginStart:5,
    marginEnd:5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 7,
    marginStart:5,
    marginEnd:5,
  },
  



})