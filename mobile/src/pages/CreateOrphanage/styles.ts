import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

interface ButtonProps {
    selected: boolean;
}

export const Container = styled.ScrollView`
    flex: 1
`;

export const Title = styled.Text`
    color: #5c8599;
    font-size: 24px;
    font-family: 'Nunito_700Bold';
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E6;
`
export const MultipleLabel = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const Selected = styled.Text`
    color: #5C8599;
`

export const Label = styled.Text`
    color: #8fa7b3;
    font-family: 'Nunito_600SemiBold';
    margin-bottom: 8px;
`

export const Input = styled.TextInput`
    background: #fff;
    border-color: #d3e2e6;
    border-width: 1.4px;
    border-radius: 20px;
    height: 56px; 
    padding-vertical: 18px;
    padding-horizontal: 24px;
    margin-bottom: 16px;
    text-align-vertical: top;
`

export const ImageView = styled.View`
    background: #edfdf6;
    flexDirection: row;
    align-items: center;
    height: 80px;
    flex: 1;
    border-radius: 20px;
    margin-bottom: 22px;
`

export const ContentImage = styled.View`
    flex: 1;
    flexDirection: row;
    justify-content: space-between;
`
export const ContentButton = styled.View`
    flex: 1;
    flexDirection: row;
    margin-top: -30px;
`

export const UploadedImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    margin-bottom: 32px;
    margin-right: 8px;
    margin-top: 30px;
    margin-left: 10px;
`

export const RemoveButton = styled(RectButton)`
    margin-top: 46px;
    margin-right: 18px;
    height: 40px;
`
export const ImageInput = styled.TouchableOpacity`
    background: rgba(255, 255, 255, 0.5);
    border-color: #96D2F0;
    border-width: 1.4px;
    border-radius: 20px;
    height: 56px;
    justify-content: center;
    align-items: center;
`

export const Button = styled(RectButton)`
    background: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`

export const ButtonNoBorder = styled(RectButton)<ButtonProps>`
    background: ${props => props.selected ? '#EDFFF6' :  '#FFF'};
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`

export const ButtonBorderRight = styled(RectButton)`
`

export const ButtonText = styled.Text`
    font-family: Nunito_800ExtraBold;
    font-size: 16px;
    color: #FFF;
`
