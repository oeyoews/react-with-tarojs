import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import Welcome from "../../components/Welcome";
import "./tailwind.css";
import Child from "../../components/Child";

function Index() {
  const [frameWork, setFrameWork] = useState("Taro");

  // suppport props for function usage, not arrow
  function goTo(page = "blog") {
    Taro.navigateTo({
      url: `/pages/${page}/index`,
    });
  }

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <Text className="m-2 flex justify-center font-sans text-lg font-bold">
        {frameWork} with react miniprogram
      </Text>
      <View className="m-2 rounded bg-indigo-200 p-2">
        <Welcome name="Success 👋 Hi, TaroJs  " />
      </View>
      <View className="m-2 rounded bg-red-400 p-2 font-mono">
        <Welcome name="Debug 🔥 Fire" />
      </View>
      <Child frameWork={frameWork + " emo"} />
      <Text
        onClick={() => {
          goTo("slides");
        }}
        className="m-2 inline cursor-pointer rounded bg-lime-300 p-2 font-bold hover:underline"
      >
        Slides
      </Text>
      <Text
        onClick={() => goTo("blog")}
        className="m-2 inline cursor-pointer rounded bg-lime-300 p-2 font-bold hover:underline"
      >
        Blog
      </Text>
    </>
  );
}
export default Index;
