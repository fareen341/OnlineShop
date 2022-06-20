import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setRecords } from '../Features/getProduct';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const Home = ({navigation}) => {
  const dispatch = useDispatch();
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
  return(
  
  <SafeAreaView style={styles.container}>
    <ScrollView >
      <Text style={styles.header}>Premium Watches from Watch Shop</Text>
      <Text style={styles.textHeader}>Our Watches has become synonymous with prestige and luxury and has since grown to be the largest independent, family owned watch store in the country.
      </Text>
      


      <View style={{ flexDirection: 'row', backgroundColor: "black", paddingBottom: 20 }}>
          <View style={{width: "33%", alignItems: 'center', }}>
            <Text style={{textAlign: "center", }}><FontAwesome name='credit-card-alt' size={15} color="white" />
          <Text style={{color: "white"}}>{'\n'}Easy Pay</Text></Text>
          </View>
          <View style={{width: "33%", alignItems: 'center', }}>
            <Text style={{textAlign: "center", }}><Ionicons name='md-car-outline' size={20} color="white" />
          <Text style={{color: "white"}}>{'\n'}Free Shipping</Text></Text>
          </View>
          <View style={{width: "33%", alignItems: 'center', }}>
            <Text style={{textAlign: "center", }}><Ionicons name='watch' size={20} color="white" />
          <Text style={{color: "white"}}>{'\n'}Branded Watches</Text></Text>
          </View>
        </View>


      <Text style={[styles.title, styles.title2]}>Collection</Text>
      <View style={styles.headerview}>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.collection}>
            <Image style={styles.imgstyle} source={require('../assets/smart_watch1.jpg')} />
          </View>
          <View style={styles.collection}>
            <Image style={styles.imgstyle} source={require('../assets/work_wear.jpg')} />
            {/* <Text>1</Text> */}
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.collection}>
            <Image style={styles.imgstyle} source={require('../assets/gift.jpg')} />
            {/* <Text>1</Text> */}
          </View>
          <View style={styles.collection}>
            <Image style={styles.imgstyle} source={require('../assets/regular_wear.jpg')} />
            {/* <Text>1</Text> */}
          </View>
        </View>        
      </View>


      {/*icon view start*/}
      <View style={[styles.headerview, {backgroundColor: "black", marginTop: 30, marginBottom: 30 }]}>

        <View style={{ flexDirection: 'row', padding: 10,  }}>
          <View style={styles.iconview}>
            <Ionicons name='md-car-outline' size={50} color="white" />
            <Text style={{color: "white"}}>Free Shipping Across India</Text>
          </View>
          <View style={styles.iconview}>
            <Ionicons name='md-checkmark-done-outline' size={50} color="white" />
            <Text style={{color: "white"}}>24 Months Warranty</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding:10 }}>
          <View style={styles.iconview}>
            <FontAwesome name='certificate' size={50} color="white" />
            <Text style={{color: "white"}}>100% Authenticity Guarantee</Text>
          </View>
          <View style={styles.iconview}>
            <FontAwesome name='exchange' size={50} color="white" />
            <Text style={{color: "white"}}>7 Day Exchange</Text>
          </View>
        </View>        
      </View>
      {/*icon view end*/}


      <Text style={styles.title}>Watches</Text>
      {/*product start*/}
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
                      style={{ height: 200, width: 160 }}
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
      {/*product end*/}
      <Pressable style={styles.button} onPress="">
              <Text style={styles.text}>See more</Text>
      </Pressable>

      {/*Authorized retailer*/}
      <Text style={[styles.title, styles.title2]}>Authorized Retailer </Text>
      <View style={[styles.headerview, {marginBottom: 50}]}>

        <View style={{ flexDirection: 'row', backgroundColor: "black" }}>
          <View style={styles.retailerStyle}>
            <Text style={{color: "white", fontSize: 25, padding: 5, marginTop: 20, marginBottom: 20, fontStyle: 'italic', marginLeft: 10}}>Casio</Text>
          </View>
          <View style={styles.retailerStyle}>
            <Text style={{color: "white", fontSize: 25, padding: 5, marginTop: 20, marginBottom: 20, fontStyle: 'italic', marginLeft: 10}}>Fossil</Text>
          </View>
          <View style={styles.retailerStyle}>
            <Text style={{color: "white", fontSize: 25, padding: 5, marginTop: 20, marginBottom: 20, fontStyle: 'italic', marginLeft: 10}}>Tissort</Text>
          </View>
          <View style={styles.retailerStyle}>
            <Text style={{color: "white", fontSize: 25, padding: 5, marginTop: 20, marginBottom: 20, fontStyle: 'italic', marginLeft: 10}}>Timex</Text>
          </View>
        </View>

        
      </View>
      {/*Authorized retailer*/}


    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
  },
  headerview: {
    // flex: 2,
    flexDirection: 'row',
    // rowGap: "5px",
    // alignItems: 'flex-start',
    // justifyContent: "space-around",
    flexWrap: "wrap",
  },
  header: {
    color: "white",
    backgroundColor: "black",
    fontSize: 20,
    padding: 15,
    textAlign: "center",
  },
  textHeader:{
    color: "white",
    backgroundColor: "black",
    fontSize: 15,
    padding: 15,
    textAlign: "center",
    fontStyle: 'italic',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    textAlign: "center",

  },
  title2:{
    marginTop: 30,
  },
  collection: {
    width: '47%',
    margin: "2%",
    // borderColor: '#ddd',
  },
  retailerStyle:{
    width: '25%',
    // margin: "2%",
  },
  imgstyle: {
    width: 170,
    height: 200,
    // borderRadius: 40,

    // width: 150,
    // height: 150,
    borderRadius: 50 / 2,
    overflow: "hidden",
    // borderWidth: 3,
    // borderColor: "red"
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
    width: '43%',
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
  iconview:{
    // backgroundColor: "black", 
    alignItems: 'center', 
    width: '50%',
    padding: 10,
  }
});
