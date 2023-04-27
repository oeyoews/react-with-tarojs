import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro';
import "windi.css";


const goTo = () => {
	Taro.navigateTo({
		url: '/pages/index/index'
	})
}

function Blog() {
	return (
		<>
			<View>Blog Page</View>
			<Button onClick={goTo} className='inline rounded bg-red-200 p-2 m-2 cursor-pointer hover:underline'>Nav to home page</Button>
		</>

	);
};

export default Blog;