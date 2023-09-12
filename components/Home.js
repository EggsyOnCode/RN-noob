import { Button, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Home({navigation}) {
  return (
    <View className="p-26">
      <Text className="text-center font-bold text-[30px]">Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("Reviews")}
      />
    </View>
  );
}
