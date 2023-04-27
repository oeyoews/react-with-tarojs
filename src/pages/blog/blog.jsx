import React from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro';
import img01 from '../../assets/img01.png'


const goTo = () => {
	Taro.navigateTo({
		url: '/pages/index/index'
	})
}

const gravatarClasses = "rounded-full w-12 h-12 shadow-lg m-2"

function Blog() {
	return (
		<>
			<View className='flex justify-center items-center hover:scale-105 duration-200'>
				<Image src='https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100' className={gravatarClasses}></Image>
			</View>
			<Image src={img01} className={gravatarClasses} ></Image>
			<View>Blog Page</View>
			<Button onClick={goTo} className='inline rounded bg-red-200 p-2 m-2 cursor-pointer hover:underline'>Nav to home page</Button>
		</>

	);
};

export default Blog;