import React, { useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "../index/tailwind.css"


function BlogPage() {

  const goTo = () => {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  };
  const [hitokoto, setHitokoto] = useState('')
  const [articleList, setArticleList] = useState([])
  const [articleStatus, setArticleStatus] = useState('')
  const gravatarClasses = `rounded-full w-6 h-6 shadow-lg m-2 ${articleStatus ? 'bg-green-500' : 'scale-125'}`;
  const getArticleListClasses = `rounded duration-200 p-2 inline ${articleStatus ? 'bg-lime-200 cursor-not-allowed' : 'bg-yellow-200'}`;

  const ArticlesHandlers = () => {
    Taro.request({
      // url: "https://cnodejs.org/api/v1/topics",
      // url: "https://meting-api-oeyoews.vercel.app/api",
      url: "https://v1.hitokoto.cn",
    }).then(res => {
      console.log(res.data)
      setHitokoto(res.data.hitokoto + ' @' + res.data.from)
      // setArticleStatus(res.data.success)
      // cnblog
      // setArticleList(res.data.data)
      // api && hitokoto
      setArticleList(res.data)
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
      <View className="flex justify-center items-center mb-4">Blog Page</View>
      <Text
        onClick={goTo}
        className="inline rounded-sm border-none bg-red-300 p-2 m-2 cursor-pointer hover:underline"
      >
        Back To Home
      </Text>

      {/* if success and clicked disable this button       */}
      <Text className={getArticleListClasses} onClick={() => {
        if (!articleStatus) {
          ArticlesHandlers(); console.log(`article list 请求成功`)
        } else {
          console.log(`success is ${articleStatus}, 不需要再次请求了`)
        }
      }
      }>Get List</Text>
      <View className="my-4 mx-2">
        <Text className="m-2 text-slate-800 font-sans text-sm">
          {hitokoto}
        </Text>
        {/* {
          articleList.map((item, index) => {
            return (
              <View key={item.id} className="text-slate-800 text-sm p-1 m-1 bg-slate-200 hover:bg-slate-300 duration-200 rounded-sm"> {item.hitokoto}</View>
            )
          })
        } */}
      </View>
    </>
  );
}

export default BlogPage;