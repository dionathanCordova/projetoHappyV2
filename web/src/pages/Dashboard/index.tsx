import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import mapPin from '../../images/map-pin.svg';
import mapPinFFF from '../../images/map-pin-FFF.svg';
import unregisteredFFF from '../../images/unregisteredFFF.svg';
import { useHistory } from 'react-router-dom';

import {
   Container,
   Content
} from './styles';

const Dashboard: React.FC = () => {
   const history = useHistory();

   return (
      <Container>
         <Sidebar colorFirstIcon="#FFD666" colorSecondIcon="#12AFCB">
            <button id="first" type="button">
               <img src={mapPin} alt=""/>
            </button>
            <button id="second" type="button" onClick={() => history.push('/dashboard/notregistered')}>
               <img src={unregisteredFFF} alt=""/>
            </button>
         </Sidebar>

         <Content>
            <div className="title">
               <h1>Orfanato cadastrado</h1>
               <p>4 cadastrados</p>
            </div>
         </Content>
      </Container>
   )
}

export default Dashboard;