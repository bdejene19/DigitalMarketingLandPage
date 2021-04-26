import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {OffersWrapper, AvailableOffer, OurPromiseWrapper} from './styledComponents';

export default function OurPromise() {
    return (
        <section>
            <article>
              <OffersWrapper inputImage="https://www.mainstreetmediasavvy.com/wp-content/uploads/2020/01/business-Marketing.jpg">
                <AvailableOffer className='snap-location'> 
                  <Typography variant='h4'><b>Our Promise</b></Typography>
                  <OurPromiseWrapper>
                    <div>
                      <img src="/guarenteeRibbon.png" alt='blue ribbon'></img>
                      <div className='promiseText'>
                        <Typography variant='subtitle1'><b>NLM Guarentee</b></Typography>
                        <Typography variant='subtitle2'>We work for you, and you only. We commit to one client, per industry, per...</Typography>
                      </div>
                    </div>

                    <div>
                      <img src="guarenteeRibbon.png" alt='guarentee ribbon'></img>
                      <div className='promiseText'>
                        <Typography variant='subtitle1'><b>PPC Guarentee</b></Typography>
                        <Typography variant='subtitle2'>If you don’t receive at least a 3-1 Return on Investment in Months...</Typography>
                      </div>
                    </div>

                    <div>
                      <img src="/guarenteeRibbon.png" alt='blue ribbon'></img>
                      <div className='promiseText'>
                        <Typography variant='subtitle1'><b>SEO Guarentee</b></Typography>
                        <Typography variant='subtitle2'>We will rank you on the first page of the major search engines for at...</Typography>
                      </div>
                    </div>

                    <div>
                      <img src="https://cdn0.iconfinder.com/data/icons/business-687/32/icons-19-2-512.png" alt='data'></img>
                      <div className='promiseText'>
                        <Typography variant='subtitle1'><b>Datacentric Management</b></Typography>
                        <Typography variant='subtitle2'>Our team eliminates guesswork with proprietary tracking and...</Typography>
                      </div>
                    </div>
                  </OurPromiseWrapper>
                  <Button variant='outlined' color='primary' size='medium' style={{gridRow: 4}}>Schedule A Call!</Button>

                </AvailableOffer>
              </OffersWrapper>
            </article>
          </section>
    )
}
