import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./tailwind.css";

const Index = () => {
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
      <View className="my-2">
        <Text
          onClick={() => {
            goTo("slides");
          }}
          className="m-2 inline cursor-pointer rounded bg-yellow-300 p-2 font-bold hover:underline"
        >
          Slides
        </Text>
        <Text
          onClick={() => goTo("blog")}
          className="m-2 inline cursor-pointer rounded bg-lime-300 p-2 font-bold hover:underline"
        >
          Blog
        </Text>
      </View>
    </>
  );
}
export default Index;