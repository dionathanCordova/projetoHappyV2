import React, { useState } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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

import { useNavigation, useRoute } from '@react-navigation/native';
interface OrphanageRouteParams {
	position: {
		latitude: number;
		longitude: number;
	};
	user_id: string;
}

export default function StepOne() {
	const route = useRoute();
	const param = route.params as OrphanageRouteParams;
	const navigation = useNavigation();

	const [images, setImages] = useState<string[]>([]);
	const [character, setCharacter] = useState(300);
	const [about, setAbout] = useState('');
	const [name, setNome] = useState('');
	const [whatsapp, setWhatsapp] = useState('');

	async function handleSelectImages() {

		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status != 'granted') {
			alert('Para cadastrar fotos, precisamo de permissão de acesso...');
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});

		if (result.cancelled) {
			return;
		}

		const { uri } = result;
		setImages([...images, uri]);
	}

	function removeImage(index: number) {
		const oldImage = [...images];
		oldImage.splice(index, 1);
		setImages(oldImage);
	}

	function handleStepDois() {
		const { latitude, longitude } = param.position;

		const data = {
			name,
			about,
			latitude,
			longitude,
			images,
			whatsapp,
			user_id: param.user_id
		}

		navigation.navigate('StepDois', {data});
	}

	return (
		<Container contentContainerStyle={{ padding: 24 }}>
			<MultipleLabel>
				<Title>Dados</Title>
				<Label><Selected>01</Selected> - 02</Label>
			</MultipleLabel>

			<Label>Nome</Label>
			<Input 
				value={name}
				onChangeText={text => setNome(text)}
			/>

			<MultipleLabel>
				<Label>Sobre</Label>
				<Label>{character - about.length} caracteres disponíveis</Label>
			</MultipleLabel>
			<Input
				style={{ height: 110 }}
				multiline
				value={about}
				onChangeText={text => setAbout(text)}
			/>

			<Label>Numero Whatsapp</Label>
			<Input 
				value={whatsapp}
				onChangeText={text => setWhatsapp(text)}
			/>

			<Label>Fotos</Label>

			{images.map((image, index) => {
				return (
					<ImageView key={image}>
						<ContentImage>
							<UploadedImage
								source={{ uri: image }}
							/>
							<RemoveButton onPress={() => removeImage(index)}>
								<Feather name="x" size={34} color="#ff669d" />
							</RemoveButton>
						</ContentImage>
					</ImageView>

				)
			})}

			<ImageInput onPress={handleSelectImages}>
				<Feather name="plus" size={24} color="#15B6D6" />
			</ImageInput>

			<Button onPress={handleStepDois}>
				<ButtonText>Próximo</ButtonText>
			</Button>
		</Container>
	)
}
