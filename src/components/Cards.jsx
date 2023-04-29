import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import SwipeableViews from "react-swipeable-views";
import "../styles/card.css";
import "../styles/tailwind.css";

const loremDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
const loremContent =
  "loreSit do anim ut ut enim ullamco quis. Consectetur aute nisi culpa consequat aliquip eu veniam ipsum adipisicing. Voluptate ut minim eu mollit amet. ";
// use fake dom lib
export default function CardList() {
  // 卡片列表数据
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "卡片 1",
      cover: "https://picsum.photos/200",
      description: loremDescription,
      content: loremContent,
    },
    {
      id: 2,
      title: "卡片 2",
      cover: "https://picsum.photos/200",
      description: loremDescription,
      content: loremContent,
    },
    {
      id: 3,
      title: "卡片 3",
      description: loremDescription,
      cover: "https://picsum.photos/200",
      content: loremContent,
    },
  ]);

  // 当前选中的卡片索引
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // 切换卡片事件处理函数
  const handleChangeIndex = (index) => {
    setActiveIndex(index);

    if (
      index === prevIndex + 1 ||
      (index === 0 && prevIndex === cards.length - 1)
    ) {
      setPrevIndex(index);
    }
  };

  return (
    <View className="card-container">
      <SwipeableViews
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
        axis="x"
        style={{ height: "100vh" }}
        slideStyle={{ height: "100vh" }}
        enableMouseEvents={true}
        // animateTransitions={true} // 取消过渡动画
      >
        {cards.map((card, index) => (
          <View key={card.id} className="h-screen bg-gray-100">
            <ScrollView className="flex-1">
              <View className="px-8 py-4">
                <Text className="itmes-center mb-4 flex justify-center text-lg font-bold text-gray-800">
                  {card.title}
                </Text>
                <br />
                <Image
                  src={card.cover}
                  className="mx-auto block h-16 rounded"
                ></Image>
                <br />
                <Text className="text-small mx-auto block indent-0 text-gray-600">
                  {card.description}
                </Text>{" "}
                <br />
                <Text className="indent-8 text-base text-gray-600">
                  {card.content}
                </Text>
              </View>
            </ScrollView>
          </View>
        ))}
      </SwipeableViews>
    </View>
  );
}
