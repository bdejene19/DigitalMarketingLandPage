import styled from 'styled-components';
import { device } from './responsiveViews/device';


export const Page = styled.div`
    overflow: auto;
    // come back to finish how to add specific destination for the scroll flex;
    main {
        width: 100vw;
        height: 90vh;
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
