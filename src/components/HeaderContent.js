import React from 'react';

import {MainContentAd, MainPageCaptivatingWrapper} from './styledComponents';
import {Typography, Button} from '@material-ui/core';
export default function HeaderContent() {
    return (
        <div>
            <article>

            <MainPageCaptivatingWrapper>
                <MainContentAd>
                <div>
                    <Typography variant="h4" color="primary" id='caption'>Decades Of Experience That Shines Through Our Work.</Typography>
                    <Typography variant='h5' color='secondary' className='mainContentAd-text'>Award winning and certified in SEO practices.</Typography>
                    <Button variant='contained' className='mainContentAd-text'>START YOUR FREE STRATEGY SESSION NOW!</Button>
                </div>
                    
                    <img src="https://nextlevelsem.com/wp-content/home-static/hrayr/assets/homepage-slide1-v001.webp" alt='affilitated logos' className='affiliated-businesses'></img>

                </MainContentAd>
                <img src="https://nextlevelsem.com/wp-content/home-static/hrayr/assets/home-hero-graphic-med.webp" alt='marketing' className='marketing-photo'></img>
            </MainPageCaptivatingWrapper>
            </article>
            
        </div>
    )
}
