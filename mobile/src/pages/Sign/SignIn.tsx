import React, { useCallback, useContext, useState } from 'react';
import api from '../../services/api';
import Authcontenxt from '../../contexts';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import AsyncStorage from '@react-native-community/async-storage';

import {
	Container,
	FormContent,
	Button,
	Input,
	Label,
	ButtonText,
} from './styles';

import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
	const [visible, setVisible] = useState(false);

	const navigation = useNavigation();

	const { signIn } = useContext(Authcontenxt);

	const handleSignIn = useCallback(async () => {
		try {
			const response = await api.post('auth', {
				email, 
				password
			});

			console.log(response.data);
			console.log(response.data.status);
			if(response.data.status !== 200) {
				setVisible(true);
			}else{
				await AsyncStorage.setItem('@Happy:user_id', response.data.user.id);
				navigation.navigate('InstructionCreate');
			}
		} catch (error) {
			setVisible(true)
		}
	}, [])

	return (
		<Container>
			<FancyAlert
				visible={visible}
				onRequestClose={() => setVisible(false)}
				icon={
					<View style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'red',
						borderRadius: 50,
						width: '100%',
					}}>
						<Text>🤓</Text>
					</View>
				}
				style={{ backgroundColor: 'white' }}
			>
				<Text onPress={() => setVisible(false)} style={{ marginTop: -16, marginBottom: 32 }}>Hello there</Text>
			</FancyAlert>


			<FormContent>
				<Label>E-mail</Label>
				<Input
					value={email}
					onChangeText={text => setEmail(text)}
				/>

				<Label>Senha</Label>
				<Input
					value={password}
					onChangeText={text => setPassword(text)}
				/>

				<Button onPress={handleSignIn}>
					<ButtonText>Entrar</ButtonText>
				</Button>
			</FormContent>
		</Container>
	)
}