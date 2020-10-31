import React from 'react';

import { Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

import onboardingImg1 from '../../images/onboarding1.png';
import onboardingImg2 from '../../images/onboarding2.png';

import { useNavigation } from '@react-navigation/native';

const SimpleOnboarding = () => {

	const navigation = useNavigation();

	return (
		<Onboarding
			onDone={() => navigation.navigate('OrphanagesMap')}
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
					image: <Image  style={{
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
