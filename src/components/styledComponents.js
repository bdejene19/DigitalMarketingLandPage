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
    height: 100%;
    & button {
        width: max-content;
        margin: 1em;
    }
`


export const NavButton = styled.button`
    width: max-content;
    height: fit-content;
    padding: 1em;
`

export const MainPageCaptivatingWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1;
    background-color: snow;
    padding-top: 10vh;
    color: pink;

    .caption {
       background-color: #3f51b5;
        background-image: linear-gradient(90deg, #3f51b5, #9c27b0);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    & img {
        width: 50vw;
        justify-self: center;
        padding: 1.5em;
    }

    & .affiliatedLogos {
        display: flex;
        flex-direction: row;
        padding: 1.5rem;

        & img{
            width: 12.5vw;
            height: 25vh;
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
    background: linear-gradient(0deg, rgba(255, 105, 180, 0.85), rgba(135, 206, 235 ,0.85));
    transform: translate(5vw, 5vh);


    & .awards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        transform: translateY(-7vh);
        
        img {
            height: 5vw;
            width: 7vw;


        }
    }
`
