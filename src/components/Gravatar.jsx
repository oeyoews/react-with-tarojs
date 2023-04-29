import React from 'react';
import { View, Image } from '@tarojs/components'

const Gravatar = () => {
	return (
		<View>
			<Image src="https://q1.qlogo.cn/g?b=qq&nk=2956398608@qq.com&s=100" className="rounded-full h-8 w-8 block mx-auto my-4"></Image>
		</View>
	);
};

export default Gravatar;