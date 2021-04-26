import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {OffersWrapper, AvailableOffer} from './styledComponents';


export default function PayPerClickSection() {
    return (
        <section>
        <article>
          <OffersWrapper inputImage="https://images.all-free-download.com/images/graphiclarge/digital_marketing_background_woman_laptop_business_elements_decor_6838079.jpg">
            <AvailableOffer className='snap-location'>
              <div>
                <Typography variant='h4'><b>Pay Per Click Advertising</b></Typography>
              </div>

              <div className='pText'>
                <Typography variant='body2'>When thinking of advertising your website online to promote your goods or services, the first main question you need to ask yourself is: are you looking to receive immediate first page rankings</Typography>
              </div>
              
              <div className='awards'>
                <img src="https://nmpidigital.com/wp-content/uploads/2018/05/effective-digital-marketing-awards.png" alt="digital marketing finalist"></img>
                <img src="https://digitalagencynetwork.com/wp-content/uploads/2019/01/ava-digital-awards.png" alt="ava digital markreting award"></img>
                <img src="https://tradablebits.com/blog/content/images/2016/02/banner.png" alt="TBITSY award"></img>
              </div>
              <Button variant='outlined' color='primary' size='medium'>Learn More</Button>
            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>
    )
}
