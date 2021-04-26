import React from 'react';
import {Typography} from '@material-ui/core';
import {ModalWrapper} from './styledComponents';
import {displayModal, removeModal} from './NavBar';

export default function BlogModal() {
    return (
        <ModalWrapper id='blog' onMouseEnter={() => displayModal('blog')} onMouseLeave={() => removeModal('blog')}>
            <div>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Google News</b></Typography></a>
              <br></br>
              <br></br>
              <br></br>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>SEO</b></Typography></a>
            </div>

            <div>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Legal Marketing</b></Typography></a>
              <br></br>
              <br></br>
              <br></br>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Social Media</b></Typography></a>

            </div>

            <div>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Pay Per Click</b></Typography></a>
              <br></br>
              <br></br>
              <br></br>
              <a href="#"><Typography variant='subtitle1' className='sub-title'><b>Web Design</b></Typography></a>
            </div>

            <img src="https://nextlevelsem.com/wp-content/uploads/2019/11/menu-client.png" alt='blog'></img>
        </ModalWrapper>
    )
}
