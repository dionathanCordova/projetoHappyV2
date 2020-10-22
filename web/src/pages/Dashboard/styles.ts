import styled from 'styled-components';

interface ButtonProps {
   bgColor?: string;
}

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
`

export const Aside = styled.aside<ButtonProps>`
   width: 80px;
   background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

   button {
      outline: 0;
   }
`

export const Content = styled.div`
   
   width: 100vw;
   height: 100px;
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: space-between;
   padding-top: 100px;

   .title{
      font-family: Nunito_800ExtraBold, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
      height: 80px;
      border-bottom: 1px solid #D3E2E5;

      color: #4D6F80;

      p{
         color: #8FA7B2;
      }
   }
`