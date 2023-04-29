import React, { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./tailwind.css";
import { faker } from '@faker-js/faker';


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
        <Image src={faker.image.avatar()} className="h-8 w-8 rounded-full block mx-auto mb-8" />
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