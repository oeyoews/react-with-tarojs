import React from 'react'
import { View, Text } from "@tarojs/components";

function Welcome({ name = "hi" }) {
  return (
    <View>
      <Text>🚀 {name}</Text>
    </View>
  )
}

export default Welcome