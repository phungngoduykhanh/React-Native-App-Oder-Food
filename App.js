import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Cart from "./components/Cart";
import User from "./components/User";
import Call from "./components/Call";
import ChatDetails from "./components/ChatDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={getTabIconSource(route.name)}
                style={{
                  marginRight: 8,
                  tintColor: focused ? "#FF1493" : "#6B50F6",
                }}
              />
              {focused ? (
                <View style={styles.tabLabel}>
                  <Text style={styles.name}>{route.name}</Text>
                </View>
              ) : null}
            </View>
          ),
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="User" component={User} />
        {/* <Tab.Screen name="Call" component={Call} /> */}
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Chat" component={ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "pink",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

function getTabIconSource(tabName) {
  switch (tabName) {
    case "Home":
      return require("./assets/Home.png");
    case "User":
      return require("./assets/Profile_Icon.png");
    case "Cart":
      return require("./assets/Buy.png");
    case "Chat":
      return require("./assets/Chat.png");
    default:
      return null;
  }
}
