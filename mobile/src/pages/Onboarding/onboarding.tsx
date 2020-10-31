import React, { useCallback, useEffect } from 'react';

import { Button, Image, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Onboarding from 'react-native-onboarding-swiper';

import onboardingImg1 from '../../images/onboarding1.png';
import onboardingImg2 from '../../images/onboarding2.png';
import Arrow from '../../images/Arrow.png';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PropsSelected {
	selected: boolean;
}

const SimpleOnboarding = () => {
	const navigation = useNavigation();

	useEffect(() => {
		AsyncStorage.getItem('@Happy:onboarded').then(response => {
			if (response) {
				navigation.navigate('OrphanagesMap')
			}
		})
	}, [])

	const onboardDone = useCallback(async () => {
		await AsyncStorage.setItem('@Happy:onboarded', 'true');
		navigation.navigate('OrphanagesMap');
	}, [AsyncStorage])

	const Dots = ({ selected }: PropsSelected) => {
		let backgroundColor;
		backgroundColor = selected ? '#5cb7d7' : '#DDD';

		return (
			<View style={{ width: 6, height: 6, marginHorizontal: 3, backgroundColor }} />
		)
	}

	const Skit = () => (
		null
	)

	const Done = ({ ...props }) => (
		<TouchableOpacity style={{ marginRight: 20, backgroundColor: '#D1EDF2', padding: 10, borderRadius: 10 }} {...props}><Image source={Arrow} /></TouchableOpacity>
	)

	const Next = ({ ...props }) => (
		<TouchableOpacity style={{ marginRight: 20, backgroundColor: '#D1EDF2', padding: 10, borderRadius: 10 }} {...props}><Image source={Arrow} /></TouchableOpacity>
	)

	return (
		<Onboarding
			onDone={onboardDone}
			DoneButtonComponent={Done}
			NextButtonComponent={Next}
			SkipButtonComponent={Skit}
			DotComponent={Dots}
			bottomBarColor='#FFF'
			titleStyles={{
				color: '#0089A5',
				fontSize: 48,
				marginTop: -60,
				width: 250,
				textAlign: "left",
				lineHeight: 48,
				fontWeight: "700"
			}}
			subTitleStyles={{
				color: '#5C8599',
				textAlign: "left",
				marginLeft: 0,
				marginBottom: 20,
				width: 250
			}}
			pages={[
				{
					backgroundColor: '#fff',
					image: <Image style={{
						marginTop: -100,
						width: 200,
						resizeMode: 'contain'
					}} source={onboardingImg1} />,
					title: 'Leve felicidade para o mundo',
					subtitle: 'Visite orfanatos e mude o dia de muitas crianças.',
				},
				{
					backgroundColor: '#fff',
					image: <Image style={{
						marginTop: -100,
						width: 200,
						resizeMode: 'contain'
					}} source={onboardingImg2} />,
					title: 'Escolha um orfanato no mapa e faça uma visita',
					subtitle: '',
					titleStyles: {
						fontSize: 28,
						lineHeight: 28,
						textAlign: "right",
					},
				}
			]}
		/>
	)
}


export default SimpleOnboarding;
