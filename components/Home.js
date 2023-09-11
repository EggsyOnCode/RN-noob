import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Header() {
  return (
    <View className="  p-26">
      <Text className="text-center font-bold text-[30px]" style={globalStyles.quicksandLight}>Home</Text>
    </View>
  );
}
