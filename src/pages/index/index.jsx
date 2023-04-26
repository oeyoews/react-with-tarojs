import React from 'react'
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Welcome from "../../components/Welcome"
import "./index.css";


export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
      <View className="index">
        <Text className="">Thi is index page(beta test)</Text>
        <Welcome name="This is a demo, success" />
      </View>
  );
}