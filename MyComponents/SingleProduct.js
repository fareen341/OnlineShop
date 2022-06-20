import axios from 'axios';
import React, { useEffect } from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../Features/getSingleProduct';
import { StatusBar } from 'expo-status-bar';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export const SingleProduct = ({ route, navigation }) => {
  const { itemId } = route.params;
  const id = JSON.stringify(itemId)
  const single_prod = useSelector((state) => state.getSingleProduct.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://192.168.0.114:8000/api/productapi/" + id)
      .then((response) => {
        dispatch(setProduct(response.data));
        console.log("api call");
      })
      .catch(error => {
        console.log("error:", error)
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}

          <Image
            style={{
              height: 400,
              width: null,
              resizeMode: 'contain'
            }}
            source={{
              uri: single_prod.product_image,
            }}
          />
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View style={styles.smallImage}>
              <Image
                style={
                  styles.box
                }
                source={{
                  uri: single_prod.product_image,
                }}
              />

              <Image
                style={
                  styles.box
                }
                source={{
                  uri: single_prod.product_img1,
                }}
              />

              <Image
                style={
                  styles.box
                }
                source={{
                  uri: single_prod.product_img2,
                }}
              />

              <Image
                style={
                  styles.box
                }
                source={{
                  uri: single_prod.product_img3,
                }}
              />
            </View>
            <Text style={{ textTransform: 'capitalize', fontSize: 20, }}>{single_prod.product_name}</Text>
            <Text style={{ fontSize: 30, }}>Only ₹{single_prod.regular_price}</Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, color: "#A0A0A0" }}>Brand: {single_prod.prod_brand}</Text>

            <Pressable style={[styles.button, { marginBottom: 10 }]} onPress="">
              <Text style={styles.text}>Buy Now</Text>
            </Pressable>

            <Pressable style={styles.button} onPress="">
              <Text style={styles.text}>Add to Cart</Text>
            </Pressable>


            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text style={{ fontSize: 25, paddingTop: 10 }}>Product Description</Text>
            <Text style={{ fontSize: 15, textAlign: 'justify' }}>{single_prod.product_desc}</Text>
            <View style={styles.smallImage}>
              <Text style={styles.desc}>Size: {single_prod.prod_size} </Text>
              <Text style={styles.desc}>Color: {single_prod.color_name}</Text>
              <Text style={styles.desc}>Brand: {single_prod.prod_brand}</Text>
            </View>

            <Text style={{ fontSize: 25, paddingTop: 10, marginBottom:100 }}>Similar Product</Text>

          </View>
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
  smallImage: {
    flexDirection: 'row',
  },
  box: {
    // backgroundColor: "pink",
    marginRight: 20,
    height: 70,
    width: 70,
    marginRight: 20
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
  desc:{
    width: "30%",
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#A0A0A0",
    
  }
})