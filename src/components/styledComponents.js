import styled from 'styled-components';
import { device } from '../responsiveViews/device';


export const HomePageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: white;

    .navImg {
        width: 14vw;
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

    .openbtn {
        display: none;
    }

    .openbtn:focus{
        outline: 0;
    }


    .sidepanel {
        display: none;
        border: solid green 10px;
    }

    @media screen and  (${device.laptop}) {
        .phone-contact {
            grid-column: 3;
        }

        .sidepanel{
            display: block;
        }

        .openbtn {
            display: block;
            height: 100%;
            font-size: 44px;
           
            color: darkgrey;
            background: white;
          
        }
    }

    @media screen and (${device.tablet}) {
        .contact-phoneNumber {
            display: none;
        }
        .phone-contact {
            justify-self: right;
            padding: 1em;
        }

        .openbtn {
            padding-right: 1em;
        }
    }
    
`;

export const HomeHeader = styled.nav`
    display: flex;
    flex-direction: row;
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
        padding-top: 10%;
        flex-direction: column;

        .marketing-photo {
            visibility: hidden;
        }

       
        .affiliated-businesses {
            width: 80%;
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



    @media screen and (${device.tablet}) {
        padding-left: 0;
        text-align: center;

        button {
            width: max-content;
        }

        .mainContentAd-text {
            margin: 0.5em;
        }
    }
`;

export const OffersWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.inputImage});
    background-size: cover; 
`;

export const AvailableOffer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    padding: 1.5em;
    color: white;
    width: fit-content;
    height: 90%;
    width: 40%;
    background: linear-gradient(200deg, rgba(0, 0, 225, 0.85), rgba(148, 0, 221, 0.85));
    transform: translate(5vw, 6vh);

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
        width: 50%;
        
    }

    @media screen and (${device.tablet}) {
        width: 70%;
        h4 {
            font-size: 24px;
        }

        .awards {
            text-align: right;
            display: inline-block;
            img {
                padding: 2%;
            }
        }

        button {
            width: 100%;
        }

        

        br > button { 
            color: black;
        }
    }

    @media screen and (max-width: 550px) {
        .learnMore-process {
            visibility: hidden;
        }
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
        border-radius: 2%;
        padding: 0.25em;
        
    }
    .process-icon {
        font-size: 50px;
    }
    h5 {
        color: blue;
    }
    .processText {
        color: darkgrey;
    }

    @media screen and (${device.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0.5em;
        grid-row: 2;

        .process-icon {
            font-size: 30px;
        }

        h5 {
            font-size: 20px;
        }
        img {
            width: 75%;
        }

       
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

    @media screen and (${device.laptop}) {
        grid-template-columns: repeat(4, 1fr);
        div {
            border-right: solid white 2px;
            border-left: none;
            padding-right: 1em;
            &&:nth-child(odd) {
                color: black;
            }
        }

        
    }

    @media screen and (${device.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;


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

    @media screen and (${device.laptop}) {
        width: 10%;
        display: none;
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

    @media screen and (${device.laptop}) {
       font-size: 8px;
       grid-gap: 1em;
    }

    @media screen and (${device.tablet}) {
        grid-row: 2;
        > div {
            flex-direction: column;
            border-radius: 1%;
        }

        img {
            width: 5vw;
        }
    }
`