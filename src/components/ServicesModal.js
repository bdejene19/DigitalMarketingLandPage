import React from 'react';
import {Typography} from '@material-ui/core';
import {ModalWrapper} from './styledComponents';
import {displayModal, removeModal} from './NavBar';

export default function ServicesModal() {
    return (
        <ModalWrapper id='services'  onMouseEnter={() => displayModal('services')} onMouseLeave={() => removeModal('services')}>
            <div>
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Pay-Per-Click</b></Typography></a>
                <a href="#"><Typography variant='body2'>Pay-Per-Click PPC</Typography></a>
                <a href="#"><Typography variant='body2'>Display Advertising</Typography></a>
                <a href="#"><Typography variant='body2'>Mobile Advertising</Typography></a>
                <a href="#"><Typography variant='body2'>Video PPC</Typography></a>
                <a href="#"><Typography variant='body2'>E-commerce</Typography></a>
                <a href="#"><Typography variant='body2'>Bing Ads</Typography></a>
                <a href="#"><Typography variant='body2'>Amazon Ads</Typography></a>
              </div>


              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Advertising Consultation</b></Typography></a>
              </div>
            </div>

            <div>
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title' className='longSub-title'><b>Search Engine Optimization</b></Typography></a>
                <a href="#"><Typography variant='body2'>Search Engine Optimization (SEO)</Typography></a>
                <a href="#"><Typography variant='body2'>Localized Map SEO</Typography></a>
                <a href="#"><Typography variant='body2'>E-commerce SEO</Typography></a>
              </div>
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Specialties</b></Typography></a>
                <a href="#"><Typography variant='body2'>Legal Marketing</Typography></a>
                <a href="#"><Typography variant='body2'>Medical Marketing</Typography></a>
              </div>
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Social Media Marketing</b></Typography></a>
                <a href="#"><Typography variant='body2'>Paid Social Media Marketing</Typography></a>
                <a href="#"><Typography variant='body2'>Organic Social Media Marketing</Typography></a>
              </div>
            </div>

            <div>
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Website Development</b></Typography></a>
                <a href="#"><Typography variant='body2'>Web Design</Typography></a>
                <a href="#"><Typography variant='body2'>Video Production and Video Marketing</Typography></a>
              </div>

              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Marketing Automation</b></Typography></a>
                <a href="#"><Typography variant='body2'>Email Marketing</Typography></a>
              </div>

              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Content</b></Typography></a>
                <a href="#"><Typography variant='body2'>Paid Content</Typography></a>
              </div>

              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Geofencing</b></Typography></a>
              </div>
              
              <div>
                <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Reputation Management</b></Typography></a>
              </div>

            </div>

            <div>
              <img src="https://nextlevelsem.com/wp-content/uploads/2019/11/menu-ipad.png" alt='services'></img>
            </div>
          </ModalWrapper>
    )
}
