import Taro, { useLoad } from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import CardList from "@/components/Cards";
import '@/tailwind'

export default function Slides() {
  function goBack(page = "") {
    Taro.navigateBack();
  }

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <CardList />
      <View>
        <Text
          className="bg-red-200 rounded-sm p-2 my-2"
          onClick={goBack}
        >
          Home
        </Text>
      </View>
    </>
  );
}
