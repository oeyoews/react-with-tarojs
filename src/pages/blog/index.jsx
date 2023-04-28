import React, { useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "../index/tailwind.css"

const gravatarClasses = "rounded-full w-6 h-6 shadow-lg m-2";

function Blog() {

  const goTo = () => {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  };
  const [articleList, setArticleList] = useState([])

  const ArticlesHandles = () => {
    Taro.request({
      url: "https://cnodejs.org/api/v1/topics",
    }).then(res => {
      setArticleList(res.data.data)
    })
  }

  return (
    <>
      <View className="flex justify-center items-center hover:scale-105 duration-200">
        <Image
          src="https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100"
          className={gravatarClasses}
        ></Image>
      </View>
      <View className="flex justify-center items-center">Blog Page</View>
      <Button
        onClick={goTo}
        className="inline rounded-sm border-none bg-red-300 p-2 m-2 cursor-pointer hover:underline"
      >
        Nav to home page
      </Button>
      <Button className="rounded-none hover:underline bg-slate-200 p-2 inline" onClick={ArticlesHandles}>Get List</Button>
      <View className="my-4">
        {
          articleList.map((item, index) => {
            return (
              <View key={item.title} className="text-slate-800 text-sm p-1 m-1 bg-slate-200 hover:bg-slate-300 duration-200 rounded-sm"> {item.title}</View>
            )
          })
        }
      </View>
    </>
  );
}

export default Blog;