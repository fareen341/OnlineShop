import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Home } from './MyComponents/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from './MyComponents/Login';
import { Product } from './MyComponents/Product';
import { Provider } from 'react-redux';
import { store } from './Features/store';
import { SingleProduct } from './MyComponents/SingleProduct.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './MyComponents/Register';
import { AccountDetails } from './MyComponents/AccountDetails';
import { Orders } from './MyComponents/Orders';
import { Cart } from './MyComponents/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (

    <Drawer.Navigator initialRouteName="Home">

      <Drawer.Screen name="Profile" component={AccountDetails}
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('./assets/profile.png')}
              style={[focused ? styles.drawerActive : styles.drawerInActive, { height: 70, width: 70, borderRadius: 290 / 2 }]}
            />
          )
        }} />

      <Drawer.Screen name="Home" component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Login" component={Login}
        options={{
          title: 'Login',
          drawerIcon: ({ focused, size }) => (
            <Entypo
              name="login"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Men" component={Product}
        options={{
          title: 'Men',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="watch"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Women" component={Product}
        options={{
          title: 'Women',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="watch"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Smart Watch" component={Product}
        options={{
          title: 'Smart Watch',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-watch-outline"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Register" component={Register}
        options={{
          title: 'Register',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="pencil-box-multiple"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="AccountDetails" component={AccountDetails}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      /> */}
      <Drawer.Screen name="Orders" component={Orders}
        options={{
          title: 'Order',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="list"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Cart" component={Cart}
        options={{
          title: 'Cart',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="cart"
              size={size}
              color={focused ? 'grey' : 'black'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}


      {/* <Stack.Navigator>
        <Stack.Screen
          name="SingleProduct"
          component={SingleProduct}
        />
      </Stack.Navigator>
    </NavigationContainer> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    marginBottom: 15,
    borderTomColor: "red",
    borderTopWidth: 1,
  },
});