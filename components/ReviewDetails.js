import { Text, View, Button } from "react-native";
import React from "react";

export default function ReviewDetails({navigation}) {
  return (
    <View className="p-26">
      <Text className="text-center font-bold text-[30px]">Review Details</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}
