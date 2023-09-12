import { Text, View, Button, Image, StyleSheet } from "react-native";
import React from "react";
export default function ReviewDetails({ navigation, route }) {
  return (
    <View className="p-26">
      <View className="p-5 drop-shadow-xl rounded-lg bg-red-200 m-3">
        <Text className="text-center font-bold text-[30px] m-10">
          {route.params ? route.params.payload.body : "nothing here"}
        </Text>

        <Text className="text-center font-bold text-[30px]">
          Rating:
        </Text>
        <Text className="text-center  font-bold text-[30px]">
          {" "}
          {route.params ? route.params.payload.rating : "nothing here"}
        </Text>
      </View>
    </View>
  );
}

