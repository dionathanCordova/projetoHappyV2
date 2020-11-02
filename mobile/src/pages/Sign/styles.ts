import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface PropsPage {
    selected: boolean;
}

interface LabelProps {
    valueInput: string;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background: #f2f2f2;
`

export const Header = styled.View`
    margin-top: -60px;
    padding: 0;
    background: #fff;
    width: 100%;
    border-radius: 40px
    shadowColor: #000;
    shadowOffset: { width: 2, height: 2 };
    shadowOpacity: 2.8;
    shadowRadius: 2px;
    elevation: 7;
`

export const ContentPages = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
`

export const Logo = styled.Image`
    align-self: center;
    width: 50px;
    height: 55px;
    margin-top: 100px;
    margin-bottom: 40px;
`

export const TextPages = styled.Text<PropsPage>`
    font-family: Nunito_800ExtraBold;
    font-size: 16px;
    color: ${props => props.selected ? '#000' : '#ccc'};
    padding-bottom: 5px;
    border-bottom-width: 3px;
    border-color: #15C3D6;
`

export const FormContent = styled.ScrollView`
    padding:20px;
    padding-top: 40px;
    flex: 1;
`

export const Label = styled.Text`
    color: #8fa7b3;
    font-family: 'Nunito_600SemiBold';
    margin-bottom: 8px;
    margin-top: 4px;
`

export const Input = styled.TextInput`
    border-color: #d3e2e6;
    border-width: 1.4px;
    
    border-radius: 8px;
    background: #FFF;
    height: 46px; 
    padding-bottom: 12px;
    width: 100%;
    margin-bottom: 16px;

    shadowColor: #000;
    shadowOffset: { width: 1, height: 1 };
    shadowOpacity: 0.8;
    shadowRadius: 2px;
    elevation: 2;

    padding-vertical: 15px;
    padding-horizontal: 20px;
`

export const Button = styled(RectButton)`
    background: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
    margin-bottom: 50px;
`
export const ButtonText = styled.Text`
    font-family: Nunito_800ExtraBold;
    font-size: 16px;
    color: #FFF;
`

// background: red;
// position: relative;

// border-bottom-width: 0.5px;