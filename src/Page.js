import styled from 'styled-components';
import { device } from './responsiveViews/device';


export const Page = styled.div`
    
    // come back to finish how to add specific destination for the scroll flex;
    main {
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;  

        scroll-snap-type: y mandatory;
        scroll-snap-destination: bottom;
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
