import React from 'react';
import {Typography} from '@material-ui/core';
import {ModalWrapper} from './styledComponents';
import {displayModal, removeModal} from './NavBar';

export default function AboutModal() {
    return (
        <ModalWrapper id='about' onMouseEnter={() => displayModal('about')}  onMouseLeave={() => removeModal('about')}>
            <div>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>About</b></Typography></a>

            </div>

            <div>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Meet our team</b></Typography></a>
            </div>

            <div>
              <a href="#"><Typography variant='subtitle1' className='longSub-title'><b>Certifications and Credentials</b></Typography></a>
            </div>

            <img src="https://nextlevelsem.com/wp-content/uploads/2019/11/menu-laptop.png" alt='about'></img>
        </ModalWrapper>
    )
}
