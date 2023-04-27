import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Testpage() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='test-page'>
      <Text>Hello world!</Text>
    </View>
  )
}
