import { Text, View, Button } from "react-native";
import React from "react";

export default function ReviewDetails({ navigation, route }) {
  console.log("inside rd rn");
  const payload = route.params ? route.params.payload : null;
  console.log(payload);
  return (
    <View className="p-26">
      {payload ? (
        <Text className="text-center font-bold text-[30px] m-10">
          {payload.body}
        </Text>
      ) : (
        <Text className="text-center">Nothing here</Text>
      )}
    </View>
  );
}
