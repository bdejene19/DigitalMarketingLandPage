import React from 'react';
import {Typography} from '@material-ui/core';
import {FooterWrapper} from './styledComponents';

export default function FooterContent() {
    return (
        <footer>
          <FooterWrapper className='snap-location'>
            <div>
              <Typography variant='subtitle2'><b>Miami Office</b></Typography>
              <br></br>
              <Typography variant='body1' className='contact-text'>
                Phone: <br></br>
                1-800-694-5832 <br></br>
                Adress: <br></br>
                2340 Wonderland Blvd, Miami Fl 33137
              </Typography>
            </div>

            <div> 
              <Typography variant='subtitle2'><b>Ft. Lauderdale Office</b></Typography>
              <br></br>
              <Typography variant='body1' className='contact-text'>
              Phone:<br></br>
              (954) 372-4132 <br></br>
              Address:<br></br>
              1 E. Broward Blvd. Suite 700 Fort Lauderdale, FL 33301
              </Typography>
            </div>

            <div>
            <Typography variant='subtitle2'><b>Orlando Office</b></Typography>
            <br></br>
            <Typography variant='body1' className='contact-text'>
              Phone:<br></br>
              (407) 751-1828 <br></br>
              Address:<br></br>
              121 South Orange Avenue Suite 1500 Orlando, FL 32801
            </Typography>

            </div>

            <div>
            <Typography variant='subtitle2'><b>Tampa Office</b></Typography>
            <br></br>
            <Typography variant='body1' className='contact-text'>
              Phone:<br></br>
              (813) 547-8569 <br></br>
              Address:<br></br>
              601 N. Ashley Dr., Suite 1100-1002 Tampa, FL 33602
            </Typography>



            </div>

            <div>
              <Typography variant='subtitle2'><b>Los Angeles Office</b></Typography>
              <br></br>
              <Typography variant='body1' className='contact-text'>
                Phone:<br></br>
                (310) 744-6597 <br></br>
                Address:<br></br>
                433 North Camden Drive 6th Floor Beverly Hills, CA 90210
              </Typography>
            </div>

            <div>
              <Typography variant='subtitle2'><b>San Fran Cisco Office</b></Typography>
              <br></br>
              <Typography variant='body1' className='contact-text'>
                Phone:<br></br>
                (415) 849-3277 <br></br>
                Address:<br></br>
                388 Market Street, Suite 1300 San Francisco, CA 94111
              </Typography>


            </div>

            <div>
              <Typography variant='subtitle2'><b>New York</b></Typography>
              <br></br>
              <Typography variant='body1' >
                Phone:<br></br>
                (646) 494-3612 <br></br>
                Address:<br></br>
                Empire State Building, 350 Fifth Avenue, 59th floor New York City, NY 10118
              
              </Typography>


            </div>

            <div>
              <Typography variant='subtitle2'><b>Brooklyn Office</b></Typography>
              <br></br>
              <Typography variant='body1'>
                Phone:<br></br>
                (646) 499-2955 <br></br>
                Address:<br></br>
                147 Front Street Brooklyn, NY 11201
              </Typography>
            </div>

            <div>
              <Typography variant='subtitle2'><b>Atlanta Office</b></Typography>
              <br></br>
              <Typography variant='body1'>
                Phone:<br></br>
                (470) 205-5160 <br></br>
                Address: <br></br>
                1201 West Peachtree Street Atlanta, GA 30309
              
              </Typography>
            </div>
          </FooterWrapper>
        </footer>  
    )
}
