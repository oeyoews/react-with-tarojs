import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import TestDemo from "../../components/Test";
import "../index/tailwind.css";

export default function Test() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="">
      <Text className="rounded bg-lime-200 p-1 hover:bg-lime-300">Test Page</Text>
      <TestDemo />
    </View>
  );
}
