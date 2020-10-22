import React, { useCallback, useState } from 'react';

import logo from '../../images/Logotipo.svg';
import Input from '../../components/Input';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
   Container,
   Aside,
   Content,
   Button
} from './styles';

const SignUp: React.FC = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, usePassword] = useState('');
   const [confirm_password, useConfirmPassword] = useState('');
   const [disabled, setDisabled] = useState(true);

   const handleSubmit = useCallback(() => {
      alert('teste');
   }, []);

   const handleChangeDisabled = useCallback(() => {
   }, [])

   return (
      <Container>
         <Aside>
            <div id='aside-logo'>
               <img src={logo} alt="happy logo" />
            </div>

            <div id="aside-cidade">
               <strong>Camboriú</strong>
               <span>Santa Catarina</span>
            </div>
         </Aside>

         <Content>
            <button id="btn-back" onClick={() => history.goBack()}>
               <FiArrowLeft size={28} color='#64c4d7' />
            </button>

            <div className="form-content">
               <h2>Fazer Cadastro</h2>

               <form action="">
                  <Input
                     type="email"
                     name="email"
                     label="E-mail"
                  />

                  <Input
                     type="password"
                     name="password"
                     label="Senha"
                  />

                  <Input
                     type="password"
                     name="confirm-password"
                     label="Confirm a senha"
                  />

                  <Button disabled={disabled} type="button" onClick={handleSubmit}>Cadastrar</Button>
               </form>
            </div>
         </Content>
      </Container>
   )
}

export default SignUp