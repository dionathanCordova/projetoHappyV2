import React, { useCallback, useContext, useState } from 'react';
import api from '../../services/api';
import Authcontenxt from '../../contexts';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
	Container,
	FormContent,
	Button,
	Input,
	Label,
	ButtonText,
} from './styles';

import { View, Text, TouchableOpacity } from 'react-native';
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
				style={styles.alert}
				icon={
					<View style={[styles.icon, { borderRadius: 32 }]}>
						<Ionicons
							name={'md-close' }
							size={36}
							color="#FFFFFF"
						/>
					</View>
				}
				onRequestClose={() => setVisible(false)}
			>
				<View style={styles.content}>
					<Text style={styles.contentText}>
						Alguem erro no com suas credenciais
					</Text>

					<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrphanagesMap')}>
						<Text style={styles.btnText}>OK</Text>
					</TouchableOpacity>
				</View>
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


const styles = StyleSheet.create({
	alert: {
	  backgroundColor: '#EEEEEE',
	},
	icon: {
	  flex: 1,
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#C3272B',
	  width: '100%',
	},
	content: {
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginTop: -16,
	  marginBottom: 16,
	},
	contentText: {
	  textAlign: 'center',
	},
	btn: {
	  borderRadius: 32,
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingHorizontal: 8,
	  paddingVertical: 8,
	  alignSelf: 'stretch',
	  backgroundColor: '#4CB748',
	  marginTop: 16,
	  minWidth: '50%',
	},
	btnText: {
	  color: '#FFFFFF',
	},
 });