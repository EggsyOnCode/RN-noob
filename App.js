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
import { AppLoading } from 'expo';
import Home from "./components/Home";


export default function App() {
 return (
  <View>
    <Home/>
  </View>
 )
};
