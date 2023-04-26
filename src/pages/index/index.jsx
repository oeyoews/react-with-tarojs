import React from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Welcome from "../../components/Welcome";
import Summary from "../../components/Summary";
import "./index.css";
import "windi.css";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index bg-indigo-200 p-2 rounded  ">
      Thihs is dmeo
      <Text className="bg-red-200 rounded hover:bg-red-400 transition duration-200">Thi is index page(beta test)</Text>
      <Summary number={1 + 2} />
      <Welcome name="This is a demo, success" />
    </View>
  );
}
