import React, { memo } from 'react';
import { View, Text } from "@tarojs/components"

function Summary({number}) {
  return (
    <View>
      <Text>Test express =  {number}</Text>
    </View>
  )
}

export default Summary;