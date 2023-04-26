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
      <View className="index bg-indigo-200 p-2 rounded  ">
        <Welcome name="Success" />
      </View>
    </>
  );
}
