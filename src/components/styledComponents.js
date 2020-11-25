import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: minmax(100px, auto);
    grid-auto-columns:minmax(100px, auto);
    background-color: snow;
    .navImg {
        width: 20vw;
        height: 18vh;
    }

    .marketingImage {
        width: 33vw;
        grid-column: 3/4
    }

    a {
        text-decoration: none;
    }
`

export const HomeHeader = styled.nav`
    display: flex;
    flex-direction: row;
    grid-column: 2/3;
    grid-gap: 0;
    height: 100%;
    & button {
        width: max-content;
        margin: 1em;
    }

  
`

export const MainPageCaptivatingWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1;
    background-color: snow;
    padding-top: 10vh;
    color: pink;
    padding-left: 5em;
    padding-right: 5em;

    .caption {
        background-color: #3f51b5;
        padding: 0.5em;
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
        width: 40vw;
        justify-self: center;
        padding: 1.5em;
    }

    & .affiliatedLogos {
        display: flex;
        flex-direction: row;
        padding: 1.5rem;

        & img {
            width: 12vw;
            height: 23vh;
        }
    }
`
export const MainContentAd = styled.div`
    grid-column: 1;
    width: 50vw;
    text-align: center;
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
    height: 90%;
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
        background: snow;
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
    grid-template-columns: repeat(9, 2fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1em;
    color: white;
    background: linear-gradient(365deg, blue, purple);

    div {
        padding: 1rem;
        border-left: solid white 2px;
    }
`


export const ModalWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: solid orange 8px;
    background-color: snow;
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
        background-color: snow;
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