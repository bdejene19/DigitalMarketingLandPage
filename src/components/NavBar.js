import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {HomePageWrapper, HomeHeader} from './styledComponents';
import SidePanel from './SidePanel';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

export const displayModal = (navBarTab) => {
    let modalBox = document.getElementById(navBarTab);
    modalBox.style.transform = "translate(0, 0)";
    modalBox.style.transition = 'all 0.25s';
    modalBox.style.visibility = 'visible';
    modalBox.style.opacity = 1;
  
  }
  
export const removeModal = (navBarTab) => {
    let modalBox = document.getElementById(navBarTab);
    modalBox.style.transform = "translate(0, 20%)";
    modalBox.style.visibility = 'hidden';
    modalBox.style.opacity = 0;
    modalBox.style.transition = 'all 0.25s';
    modalBox.style.transitionDelay = '0.1s'
  }


export default function NavBar() {

   

    return (
        <HomePageWrapper id='homePage-top' className='snap-location'>
            <div style={{display: 'flex', flexDirection: "row"}}>

              <SidePanel></SidePanel>
              <img src="https://www.squadhelp.com/images/logo/logodesi9/33389highmark_seo_6.png" alt='marketing logo' className='navImg'></img>
            </div>

            <HomeHeader>
                <Button color='primary' disableRipple>Home</Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('services')} onMouseLeave={() => removeModal('services')}>Services<ArrowRightIcon/></Button >
                <Button color='primary' disableRipple>Value Proposition</Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('about')} onMouseLeave={() => removeModal('about')}>About<ArrowRightIcon></ArrowRightIcon></Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('blog')} onMouseLeave={() => removeModal('blog')}>Blog<ArrowRightIcon></ArrowRightIcon></Button >
                <Button color='primary' disableRipple>Contact Us</Button >
            </HomeHeader>
            <div className='phone-contact'>
              <LocalPhoneIcon color="primary" fontSize='large'></LocalPhoneIcon>
              <a href="#"><Typography variant='h5' color="primary" className='contact-phoneNumber'style={{width: 'max-content'}}>
                1-800-694-5832
              </Typography></a>
            </div>
          </HomePageWrapper>
    )
}
