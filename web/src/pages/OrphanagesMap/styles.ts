import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative;
   display: flex;

   .leaflet-container {
      z-index: 5;
   }

   .map-popup .leaflet-popup-content {
      color: #0089a5;
      font-size: 20px;
      font-weight: bold;
      margin: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
         width: 40px;
         height: 40px;
         background: #15c3d6;
         box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
         border-radius: 12px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   }
`

export const Aside = styled.aside`
   width: 440px;
   background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
   padding: 80px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   color: #FFF;

   h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
   }

   p {
      line-height: 28px;
      margin-top: 24px;
   }

   footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;

      strong {
         font-weight: 800;
      }
   }

   button {
      background: transparent;
      border: 0;
      outline: none;
   }
   
`

export const CreateOrphanage = styled.button`
   position: absolute;
   right: 40px;
   bottom: 40px;
   z-index: 10;
   background: #15c3d6;
   width: 64px;
   border: none;
   outline: 0;
   height: 64px;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: background 0.2s;

   :hover {
      background: #17d6eb;
   }
`