import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: minmax(100px, auto);
    grid-auto-columns:minmax(100px, auto);
    background-color: snow;
    .navImg {
        width: 25vw;
        height: 18vh;
    }

    .marketingImage {
        width: 33vw;
        grid-column: 3/4
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
    height: 80%;
    width: 40%;
    background: linear-gradient(0deg, rgba(255, 105, 180, 0.85), rgba(135, 206, 235 ,0.85));
    transform: translate(5vw, 5vh);

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
        color: black;
        width: fit-content;
        height: fit-content;
        justify-items: end;
        position: relative;
        align-self: flex-end;
    }

    button:hover {
        background-color: #8133ee;
        color: white;
    }
`

export const ProcessWrapper = styled.div`
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
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: minmax(auto, 1fr);
    color: white;
    background: linear-gradient(365deg, blue, purple);
`


export const ModalWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: solid orange 5px;
    background-color: snow;
    margin-left: 10%;
    z-index: 1;
    visibility: hidden;
    transform: translateY(20%);
    padding: 1em;
    grid-column-gap: 1em;
    justify-content: space-around;
    
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