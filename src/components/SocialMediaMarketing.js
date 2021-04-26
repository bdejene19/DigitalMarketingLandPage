import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {OffersWrapper, AvailableOffer} from './styledComponents';

export default function SocialMediaMarketing() {
    return (
        <section>
            <article>
              <OffersWrapper inputImage="https://www.vaishnogsoftwares.com/images/00SocialMediaMarketing.jpg">
                <AvailableOffer className='snap-location'>
                  <div>
                    <Typography variant='h4'><b>Social Media Marketing</b></Typography>
                  </div>

                  <div  className='pText'>
                    <Typography variant='body2'>Social Media Marketing has become extremely prevalent over the years, especially since the creation of Facebook in early 2004. There are multiple ways to advertise your website on various social media platforms.
                    There are paid ads, which work similarly to a search engine’s pay-per-click model, that enable you to pay a small premium when your ad is viewed.</Typography>
                  </div>
                  
                  <div className='awards'>
                    <img src="/mediaMarketingExpert.png" alt="Social media marketing experts"></img>
                    <img src="https://pbs.twimg.com/media/D9desyNVAAA4pvB?format=jpg&name=900x900" alt="Social Media Marketing Awards Finalist"></img>
                    <img src="https://ml.globenewswire.com/Resource/Download/c3cf6ad0-aceb-47af-8a4e-89629f30c702?size=3" alt="Content Marketing Awards (CMA)"></img>
                  </div>
                  <Button variant='outlined' color='primary' size='medium'>Learn More</Button>

                </AvailableOffer>
              </OffersWrapper>
            </article>
          </section>
    )
}
