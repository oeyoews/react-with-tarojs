import React from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Welcome from "../../components/Welcome";
import "./index.css";
import "windi.css";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <Text className="font-sans text-lg font-bold m-2 flex justify-center">Taro with react miniprogram</Text>
      <View className="index bg-indigo-200 p-2 rounded m-2">
        <Welcome name="Success 👋 Hi  " />
      </View>
      <View className="bg-red-400 rounded p-2 m-2 font-mono">
        <Welcome name="Debug 🔥 Fire" />
      </View>
    </>
  );
}