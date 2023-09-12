import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Home from "./components/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetails from "./components/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reviews" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
