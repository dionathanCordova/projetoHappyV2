import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';

import { useHistory, Link } from 'react-router-dom';
import { ReactNode } from 'react';

import {
   Container,
   Button,
   Children
} from './styles'

interface AsideProps {
   children: ReactNode;
   colorFirstIcon?: string;
   colorSecondIcon?: string;
}

export default function Sidebar({ children, colorFirstIcon, colorSecondIcon }: AsideProps) {

   const { goBack } = useHistory();

   return (
      <Container>
         <Link to="/">
            <img src={mapMarkerImg} alt="Happy" />
         </Link>

         <Children colorFirstIcon={colorFirstIcon} colorSecondIcon={colorSecondIcon}>
            {children}
         </Children>

         <footer>
            <Button type="button" onClick={goBack}>
               <FiArrowLeft size={24} color="#FFF" />
            </Button>
         </footer>
      </Container>
   )
}