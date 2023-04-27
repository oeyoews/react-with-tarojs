import React from 'react';
import { View, Text } from '@tarojs/components'

function Child(props) {
	return (
		<View>
			<Text>{props.frameWork}</Text>
		</View>
	);
};

export default Child;