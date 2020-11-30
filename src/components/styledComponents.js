import styled from 'styled-components';
import { device } from '../responsiveViews/device';


export const HomePageWrapper = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns:minmax(100px, auto);
    background-color: white;
    .navImg {
        width: 17vw;
        height: 14vh;

    }

    .phone-contact {
        display: flex;
        justify-content: center; 
        align-items: center; 
        flex-direction: row;
        
        a {
            text-decoration: none;
        }

    }

    @media screen and  (${device.laptop}) {
        .phone-contact {
            grid-column: 3;
        }
    }

    
`;

export const HomeHeader = styled.nav`
    
    display: flex;
    flex-direction: row;
    grid-column: 2/3;
    grid-gap: 0;
    height: 100%;
    & button {
        width: max-content;
        padding: 1em;
        margin: 0;
    }
    @media screen and  (${device.laptop}) {
        display: none;

        
    }

  
`

export const MainPageCaptivatingWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1;
    background-color: white;
    padding-top: 10vh;
    color: pink;

    #caption {
        background-color: #3f51b5;
        padding-bottom: 0;
        background-image: linear-gradient(65deg, #3f51b5, #9c27b0);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;

    }


    & img {
        width: 35vw;
        justify-self: left;
    }

    @media screen and (${device.laptop}) {
        margin: 0;
        padding: 1em;

        .affiliatedLogos img {
            height: 18vh;
        }
    }

    @media screen and (${device.tablet}) {
        display: flex;
        flex-direction: column;

        img {
            visibility: hidden;
        }

        .affiliatedLogos img {
            visibility: 18vh;
        }
    }
`
export const MainContentAd = styled.div`
    grid-column: 1;
    padding-left: 10.5vw;
    button {
        width: fit-content;
        height: fit-content;
        justify-items: end;
        align-self: flex-end;
        align-items: flex-end;
        color: #FF4500;
        background-color: white;
        border: solid 3px #FF4500;
    }

    .mainContentAd-text {
        margin-bottom: 2em;
        margin-top: 0.5em;
    }

    button:hover {
        background-color: #FF4500	;
        color: white;
    }

`

export const OffersWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.inputImage});
    background-size: cover;
    
    
`

export const AvailableOffer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    padding: 1.5em;
    color: white;
    width: fit-content;
    height: 85%;
    width: 40%;
    background: linear-gradient(200deg, rgba(0, 0, 225, 0.85), rgba(148, 0, 221, 0.85));
    transform: translate(5vw, 8vh);

    .pText{
        align-self: center;
    }

    .awards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
        img {
            height: 10vw;
            width: 12vw;
            padding: 1em;
        }
    }

    button {
        width: fit-content;
        height: fit-content;
        justify-items: end;
        align-self: flex-end;
        align-items: flex-end;
        color: #FF4500;
        border: solid 1px #FF4500;
    }

    button:hover {
        background-color: #FF4500	;
        color: white;
    }

    @media screen and (${device.laptop}) {
        width: 55%;
        height: 80%
    }

    @media screen and (${device.tablet}) {
        width: 70% ;
    }

`

export const ProcessWrapper = styled.div`
    grid-row: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 3fr;
    grid-column-gap: 1em;
    text-align: center;
    color: blue;
    div {
        background: white;
        border-radius: 3%;
        padding: 0.25em;
        
    }

    h5 {
        color: blue;
    }
    .processText {
        color: darkgrey;
    }
`

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    color: white;
    background: linear-gradient(365deg, blue, purple);

    div {
        padding: 0.5em;
        border-left: solid white 2px;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .contact-text {}
`


export const ModalWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: solid orange 8px;
    background-color: white;
    margin-left: 10%;
    z-index: 1;
    visibility: hidden;
    transform: translateY(20%);
    padding: 1em;
    grid-column-gap: 1em;
    justify-content: space-around;
    
    a {
        color: black;
        text-decoration: none;
    }
    div {
        padding-bottom: 1em;

        .longSub-title {
            width: max-content;
            border-bottom: solid orange 3px;

        }
    }

    .sub-title {
        border-bottom: solid orange 3px;
        width: 100%;
    }
`

export const OurPromiseWrapper = styled.div`

    grid-row: 3;
    justify-self: flex-start;
    display: grid;
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.5em;   

    > div {
        background-color: white;
        display: flex;
        color: black;
        flex-direction: row;
        gap: 1em;
        padding: 1em;
        border-radius: 2%;
    }

    img {
        width: 3vw;
        height: 8vh;
        align-items: center;
        justify-self: center;
        align-self: center;
    }
`