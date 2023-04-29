import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "../../styles/tailwind.css";
import { Button, Popup, Cell, Icon, Image, Tag } from '@antmjs/vantui'
import Count from "../../components/Count";

function VantButtonDemo() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState('top')


  const showAction = function (position) {
    setPosition(position)
    setShow(true)
  }

  return (
    <View className="bg-lime-200 m-2 p-2 rounded">
      <Cell title="展示弹出层" isLink onClick={() => setShow(true)} />
      <Cell title="顶部弹出" isLink onClick={() => showAction('top')} />
      <Popup show={show} onClose={() => setShow(false)}>
        <View className="bg-lime-200 font-bold p-2 m-2">
          内容
        </View>
      </Popup>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="primary" plain>默认按钮</Button>
      <Button type="info" plain>默认按钮</Button>
      <Button type="danger" plain>默认按钮</Button>
      <Button plain hairline type="primary">
        细边框按钮
      </Button>
      <Button disabled type="primary">
        禁用状态
      </Button>
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="加载中..." />

      <Button icon="starO" type="primary" />
      <Button icon="starO" type="primary">
        按钮
      </Button>
      <Button
        icon="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
        type="info"
      >
        按钮
      </Button>
    </View>
  )
}


function BlogPage() {

  const goBack = () => {
    Taro.navigateBack();
  }

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
      <Icon name="chat-o" size="32px" className="icon"></Icon>
      {/* This rounded class not work for vant icon lib */}
      <Icon dot info={"avatar"} name="https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100" size="32px" className="rounded icon"></Icon>
      <Icon
        name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        size="32px"
        className="icon"
      ></Icon>
      <Icon name="arrow-left" size="32px" className=""></Icon>
      <Text
        onClick={goBack}
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
      <VantButtonDemo />
      <Tag type="primary">标签</Tag>
      <Count />
    </>
  );
}

export default BlogPage;