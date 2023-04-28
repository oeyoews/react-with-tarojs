import React, { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import Welcome from "../../components/Welcome";
import "./tailwind.css";
import Child from "../../components/Child";

// suppport props for function usage, not arrow
const goTo = () => {
  Taro.navigateTo({
    url: "/pages/blog/index",
    // url: "/pages/test-page/index",
    // url: "/pages/test/index"
  });
};

function Index() {
  const [frameWork, setFrameWork] = useState("Taro");

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <Text className="font-sans text-lg font-bold m-2 flex justify-center">
        {frameWork} with react miniprogram
      </Text>
      <View className="bg-indigo-200 p-2 rounded m-2">
        <Welcome name="Success 👋 Hi, TaroJs  " />
      </View>
      <View className="bg-red-400 rounded p-2 m-2 font-mono">
        <Welcome name="Debug 🔥 Fire" />
      </View>
      <Child frameWork={frameWork + " emo"} />
      <Text
        onClick={goTo}
        className="bg-lime-300 inline font-bold rounded p-2 m-2 hover:underline cursor-pointer"
      >
        Navigation
      </Text>
    </>
  );
}
export default Index;
