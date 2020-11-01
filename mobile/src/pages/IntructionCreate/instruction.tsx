import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import InstruçãoTouch from '../../images/InstruçãoTouch.png';

export default function Instruction() {
	const navigation = useNavigation();

	function handleNextStep() {
		navigation.navigate('SelectMapPosition');
	}

	return (
		<View style={styles.container}>
			<RectButton onPress={handleNextStep}>
				<Image style={styles.imgStyle} source={InstruçãoTouch} />
			</RectButton>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#15C3D6',
	},
	imgStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
})