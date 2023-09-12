import { Button, Text, View, FlatList, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [modal,setModal] = useState(false)
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "zelda is great!",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "I am GOT",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Gamer are you!",
      key: "3",
    },
  ]);
  return (
    <View className="p-26">
      <View className="flex-row justify-center m-5">
        <Ionicons
          name="add-circle-outline"
          size={50}
          color="black"
          onPress={() => setModal((prevstate) => !prevstate)}
        />
      </View>
      <Modal visible={modal} animationType="slide">
        <Button
          title="back"
          color="red"
          onPress={() => setModal((prevstate) => !prevstate)}
        ></Button>
      </Modal>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Reviews", { payload: item })}
            >
              <Text className="font-bold text-center m-1 p-3 text-[20px]">
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
