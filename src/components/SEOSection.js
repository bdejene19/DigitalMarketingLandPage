import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {OffersWrapper, AvailableOffer} from './styledComponents';

export default function SEOSection() {
    return (   
        <section>
            <article>
            <OffersWrapper inputImage="https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg">
                <AvailableOffer className='snap-location'>
                <div>
                    <Typography variant='h4'><b>Search Engine Optimization</b></Typography>
                </div>

                <div className='pText'>
                    <Typography variant='body2'>SEO, or Search Engine Optimization, is truly an art form. If executed properly, SEO can be one of the best forms of marketing you can do to promote your website, while being the most cost effective.</Typography>
                </div>
                
                <div className='awards'>
                    <img src="https://websiterelease.com/wp-content/uploads/2016/11/Search-Engine-Optimization-SEO-banner.jpg" alt="SEO practices"></img>
                    <img src="https://www.boostability.com/wp-content/uploads/2015/03/10BestSEO-Logo-419x500.png" alt="Top 10 SEO"></img>
                    <img src="https://www.seoworks.co.uk/wp-content/uploads/2018/06/Google-Partner-Specialist-Badge.png" alt="Google Partners"></img>
                </div>
                <Button variant='outlined' color='primary' size='medium'>Learn More</Button>

                </AvailableOffer>
            </OffersWrapper>
            </article>
        </section>
    )
}
