import React, { useState } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { RectButton } from 'react-native-gesture-handler';

import {
	Container,
	Title,
	Label,
	MultipleLabel,
	Input,
	ImageView,
	UploadedImage,
	ImageInput,
	ContentImage,
	Button,
	ButtonText,
	Selected,
	RemoveButton
} from './styles';
import { useRoute } from '@react-navigation/native';

interface OrphanageRouteParams {
	position: {
		latitude: number;
		longitude: number;
	}
}

export default function StepOne() {
	const route = useRoute();
	const param = route.params as OrphanageRouteParams;

	const [images, setImages] = useState<string[]>([]);

	async function handleSelectImages() {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if(status != 'granted') {
			alert('Para cadastrar fotos, precisamo de permissão de acesso...');
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});

		if(result.cancelled) {
			return;
		}

		const { uri } = result;
		setImages([...images, uri]);
	}

	return (
		<Container contentContainerStyle={{ padding: 24 }}>
			<MultipleLabel>
				<Title>Dados</Title>
				<Label><Selected>01</Selected> - 02</Label>
			</MultipleLabel>

			<Label>Nome</Label>
			<Input />

			<MultipleLabel>
				<Label>Sobre</Label>
				<Label>200 caracteres disponíveis</Label>
			</MultipleLabel>
			<Input
				style={{ height: 110 }}
				multiline
			/>

			<Label>Numero Whatsapp</Label>
			<Input />

			<Label>Fotos</Label>
			<ImageView>
				{images.map(image => {
					return(
						<ContentImage>
							<UploadedImage 	
								key={image}
								source={{uri: image}}
							/>
							<RemoveButton>
								<Feather name="x" size={34} color="#ff669d"/>
							</RemoveButton>
						</ContentImage>
					)
				})}
			</ImageView>

			<ImageInput onPress={handleSelectImages}>
				<Feather name="plus" size={24} color="#15B6D6" />
			</ImageInput>

			<Button>
				<ButtonText>Próximo</ButtonText>
			</Button>
		</Container>
	)
}
