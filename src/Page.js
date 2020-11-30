import styled from 'styled-components';
import { device } from './responsiveViews/device';


export const Page = styled.div`
    overflow: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // come back to finish how to add specific destination for the scroll flex;
    .content-wrapper {
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;

        .snap-location {
            scroll-snap-align: start;
        }


    }



    
  
    @media ${device.laptop} {
        max-width: ${device.laptopL};

    }

    @media ${device.tablet} {
        max-width: ${device.laptop};
    }

    @media ${device.mobileS} {
        max-width: ${device.tablet};
    }

`;
