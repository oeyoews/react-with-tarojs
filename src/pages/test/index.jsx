import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import TestDemo from "../../components/Test";
import "../index/tailwind.css";
import CardList from "../../components/Cards";

export default function Test() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
        <CardList />
  );
}
