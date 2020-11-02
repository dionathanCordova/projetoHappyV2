import React from 'react';

import {
    Container,
    FormContent,
    Button,
    Input,
    Label,
    ButtonText,
} from './styles';

export default function Signup() {
    return (
        <Container>
            <FormContent>
                <Label>E-mail</Label>
                <Input
                />

                <Label>Senha</Label>
                <Input
                />

                <Label>Confirme a Senha</Label>
                <Input
                />

                <Button><ButtonText>Cadastrar</ButtonText></Button>
            </FormContent>
        </Container>
    )
}