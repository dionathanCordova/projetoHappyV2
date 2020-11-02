import React, { useState } from 'react';
import { Image } from 'react-native';

import LogoImg from '../../images/map-marker.png';
import Signup from './SigUp';
import Signin from './SignIn';

import {
	Container,
	Header,
	ContentPages,
	TextPages,
	Logo
} from './styles';

export default function Sign() {
	const [selectedPage, setSelectedPage] = useState('signup');

	function handlePageSelected(page: string) {
		setSelectedPage(page);
	}

	return (
		<Container>
			<Header>
				<Logo source={LogoImg} />

				<ContentPages>
					<TextPages onPress={() => handlePageSelected('signup')} selected={selectedPage === 'signup' ? true : false}>Cadastrar</TextPages>
					<TextPages onPress={() => handlePageSelected('sigin')} selected={selectedPage === 'sigin' ? true : false}>Entrar</TextPages>
				</ContentPages>

			</Header>

			{selectedPage == 'signup' && (
				<Signup />
			)}

			{selectedPage == 'sigin' && (
				<Signin />
			)}
		</Container>
	)
}