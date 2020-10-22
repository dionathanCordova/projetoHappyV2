import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import mapPinFFF from '../../images/map-pin-FFF.svg';
import unregistered from '../../images/unregistered.svg';
import { useHistory } from 'react-router-dom';

import {
   Container,
   Content
} from './styles';

const Dashboard: React.FC = () => {
   const history = useHistory();

   return (
      <Container>
         <Sidebar colorFirstIcon="#12AFCB" colorSecondIcon="#FFD666">
            <button id="first" type="button" onClick={() => history.push('/dashboard')}>
               <img src={mapPinFFF} alt=""/>
            </button>
            <button id="second" type="button">
               <img src={unregistered} alt=""/>
            </button>
         </Sidebar>

         <Content>
            <div className="title">
               <h1>Cadastrados pendentes</h1>
               
               <p>1 cadastrados</p>
            </div>
         </Content>
      </Container>
   )
}

export default Dashboard;