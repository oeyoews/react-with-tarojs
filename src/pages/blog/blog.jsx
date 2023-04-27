import React from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro';
import img01 from '../../assets/img01.png'


const goTo = () => {
	Taro.navigateTo({
		url: '/pages/index/index'
	})
}

function Blog() {
	return (
		<>
			<Image src={img01} className='rounded-full w-12 h-12 shadow-lg' ></Image>
			<View>Blog Page</View>
			<Button onClick={goTo} className='inline rounded bg-red-200 p-2 m-2 cursor-pointer hover:underline'>Nav to home page</Button>
		</>

	);
};

export default Blog;