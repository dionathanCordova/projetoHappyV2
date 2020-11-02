import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

import {
	Container,
	Title,
	Label,
	MultipleLabel,
	Input,
	Button,
	ButtonText,
	Selected,
	ContentButton,
	ButtonNoBorder,
} from './styles';
import api from '../../services/api';

interface DataDto {
	data: {
		about: string;
		images: string[];
		latitude: number;
		longitude: number;
		whatsapp: string;
		name: string;
		user_id: string;
	}
}

export default function StepDois() {
	const [visible, setVisible] = useState(false);

	const [formData, setFormdata] = useState({});

	const [instruction, setInstruction] = useState('');
	const [opening_hours, setOpenHours] = useState('');
	const [open_on_weekends, setOpenOnWeekends] = useState(false);

	const [images, setImages] = useState<string[]>([]);
	const [about, setAbout] = useState('');
	const [name, setNome] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [user_id, setUserId] = useState('');

	const route = useRoute();

	const navigation = useNavigation();

	useEffect(() => {
		const param = route.params as DataDto;
		setAbout(param.data.about);
		setNome(param.data.name);
		setWhatsapp(param.data.whatsapp);
		setImages(param.data.images);
		setLatitude(param.data.latitude);
		setLongitude(param.data.longitude);
		setUserId(param.data.user_id);
		setFormdata(param);
	}, [])

	async function handleCreate() {
		try {
			const data = new FormData();
			data.append('name', name);
			data.append('about', about);
			data.append('latitude', String(latitude));
			data.append('longitude', String(longitude));
			data.append('instruction', instruction);
			data.append('opening_hours', opening_hours);
			data.append('open_on_weekends', String(open_on_weekends));
			data.append('user_id', user_id);

			images.forEach((image, index) => {
				data.append('images', {
					name: `image_${index}.jpg`,
					type: 'image/jpg',
					uri: image,
				} as any)
			})

			const response = await api.post('orphanages', data);
			if (response.data.status === 'ok') {
				setVisible(true);
			}
		} catch (error) {
			alert('Algum erro no cadastro')
		}
	}

	return (
		<Container contentContainerStyle={{ padding: 24 }}>

			<FancyAlert
				visible={visible}
				onRequestClose={() => navigation.navigate('OrphanagesMap')}
				icon={
					<View style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#3CDC8C',
						borderRadius: 50,
						width: '100%',
					}}>
						<Text>🤓</Text>
					</View>
				}
				style={{ backgroundColor: 'white' }}
			>
				<Text onPress={() => navigation.navigate('OrphanagesMap')} style={{ marginTop: -16, marginBottom: 32 }}>
					O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
				</Text>
			</FancyAlert>

			<MultipleLabel>
				<Title>Visitação</Title>
				<Label>01 - <Selected>02</Selected></Label>
			</MultipleLabel>

			<MultipleLabel>
				<Label>Instruções</Label>
			</MultipleLabel>
			<Input
				style={{ height: 110 }}
				multiline
				value={instruction}
				onChangeText={text => setInstruction(text)}
			/>

			<Label>Horário de atendimento</Label>
			<Input
				value={opening_hours}
				onChangeText={text => setOpenHours(text)}
			/>

			<Label>Atende no fim de semana</Label>
			<ContentButton>
				<ButtonNoBorder selected={open_on_weekends ? true : false} style={{ width: 160 }} onPress={() => setOpenOnWeekends(true)}>
					<Text>Sim</Text>
				</ButtonNoBorder>
				<ButtonNoBorder selected={!open_on_weekends ? true : false} style={{ width: 160 }} onPress={() => setOpenOnWeekends(false)}>
					<Text>Não</Text>
				</ButtonNoBorder>
			</ContentButton>

			<Button onPress={handleCreate}>
				<ButtonText>Próximo</ButtonText>
			</Button>
		</Container>
	)
}