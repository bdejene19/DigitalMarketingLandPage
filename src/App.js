import React from 'react';
import { HomeHeader, HomePageWrapper, MainContentAd, MainPageCaptivatingWrapper, OffersWrapper, AvailableOffer, ProcessWrapper, FooterWrapper, ModalWrapper, OurPromiseWrapper} from './components/styledComponents'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import {Typography, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './styles.css';
import {Page} from './Page';
import SidePanel from './components/SidePanel';

const displayModal = (navBarTab) => {
  let modalBox = document.getElementById(navBarTab);
  modalBox.style.transform = "translate(0, 0)";
  modalBox.style.transition = 'all 0.25s';
  modalBox.style.visibility = 'visible';
  modalBox.style.opacity = 1;

}

const removeModal = (navBarTab) => {
  let modalBox = document.getElementById(navBarTab);
  modalBox.style.transform = "translate(0, 20%)";
  modalBox.style.visibility = 'hidden';
  modalBox.style.opacity = 0;
  modalBox.style.transition = 'all 0.25s';
  modalBox.style.transitionDelay = '0.25s'
}


function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


function App() {
  return (
    <Page>
      <div className='content-wrapper'>
        <header>
        <div id="mySidepanel" className="sidepanel">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
          </div>
          <HomePageWrapper id='homePage-top' className='snap-location'>
            {/**<SidePanel></SidePanel>*/}
            <img src="https://www.squadhelp.com/images/logo/logodesi9/33389highmark_seo_6.png" alt='marketing logo' className='navImg'></img>
            <HomeHeader>
                <Button color='primary' disableRipple>Home</Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('services')} onMouseLeave={() => removeModal('services')}>Services<ArrowRightIcon></ArrowRightIcon></Button >
                <Button color='primary' disableRipple>Value Proposition</Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('about')} onMouseLeave={() => removeModal('about')}>About<ArrowRightIcon></ArrowRightIcon></Button >
                <Button color='primary' disableRipple onMouseEnter={() => displayModal('blog')} onMouseLeave={() => removeModal('blog')}>Blog<ArrowRightIcon></ArrowRightIcon></Button >
                <Button color='primary' disableRipple>Contact Us</Button >
            </HomeHeader>
            <div className='phone-contact'>
              <LocalPhoneIcon color="primary" fontSize='large'></LocalPhoneIcon>
              <a href="#"><Typography variant='h5' color="primary" style={{width: 'max-content'}}>
                1-800-694-5832
              </Typography></a>
            </div>
          </HomePageWrapper>


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
        </header>

        <main>
          <section>
            <article>
              <MainPageCaptivatingWrapper>
                <MainContentAd>
                  <div>
                    <Typography variant="h4" color="primary" id='caption'>Decades Of Experience That Shines Through Our Work.</Typography>
                    <Typography variant='h5' color='secondary' className='mainContentAd-text'>Award winning and certified in SEO practices.</Typography>
                    <Button variant='contained' className='mainContentAd-text'>START YOUR FREE STRATEGY SESSION NOW!</Button>
                  </div>
                    
                    <img src="https://nextlevelsem.com/wp-content/home-static/hrayr/assets/homepage-slide1-v001.webp" alt='affilitated logos'></img>
                </MainContentAd>
                <img src="https://nextlevelsem.com/wp-content/home-static/hrayr/assets/home-hero-graphic-med.webp" alt='marketing'></img>
              </MainPageCaptivatingWrapper>
            </article>
          </section>
          
          <div className='offers-wrapper'>
          <section>
            <article>
              <OffersWrapper inputImage="https://images.all-free-download.com/images/graphiclarge/digital_marketing_background_woman_laptop_business_elements_decor_6838079.jpg">
                <AvailableOffer className='snap-location'>
                  <div>
                    <Typography variant='h3'><b>Pay Per Click Advertising</b></Typography>
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

          <section>
            <article>
              <OffersWrapper inputImage="https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg">
                <AvailableOffer className='snap-location'>
                  <div>
                    <Typography variant='h3'><b>Search Engine Optimization</b></Typography>
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


          <section>
            <article>
              <OffersWrapper inputImage="https://www.vaishnogsoftwares.com/images/00SocialMediaMarketing.jpg">
                <AvailableOffer className='snap-location'>
                  <div>
                    <Typography variant='h3'><b>Social Media Marketing</b></Typography>
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

          <section>
            <article>
              <OffersWrapper inputImage="https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2017/04/people-digital-content-data-ss-1920.jpg">
                <AvailableOffer className='snap-location'>
                  <Typography variant='h4'><b>Our Process to Better Marketing, Leads, and Results</b></Typography>
                  <ProcessWrapper>
                    <div>
                      <SearchIcon color='inherit' style={{width: 70, height: 60}}></SearchIcon>
                      <Typography variant='h5'><b>Discover</b></Typography>
                      <Typography variant='body2' className='processText'>We offer a FREE Audit of your SEM, SEO, SMM initiative(s) and competitor analysis. Then we deliver a detailed customized proposal at NO COST!</Typography>
                    </div>

                    <div>
                      <AddCircleOutlineIcon color='inherit' style={{width: 70, height: 60}}></AddCircleOutlineIcon>
                      <Typography variant='h5'><b>Create</b></Typography>
                      <Typography variant='body2' className='processText'>We will create a custom-tailored marketing strategy for your business, which includes: video, photography, infographics, articles, and more.</Typography>
                    </div>
                    
                    <div>
                      <BubbleChartIcon color='inherit' style={{width: 70, height: 60}}></BubbleChartIcon>
                      <Typography variant='h5'><b>Evolve</b></Typography>
                      <Typography variant='body2' className='processText'>As technology, market trends, and budgets change, we continue to adapt your marketing strategy, delivering consistent exponential growth.</Typography>
                    </div>
                  </ProcessWrapper>
                  <br></br>
                  <Button variant='outlined' color='primary' size='medium'>Sechdule A Call!</Button>
                </AvailableOffer>
              </OffersWrapper>
            </article>
          </section>

          <section>
            <article>
              <OffersWrapper inputImage="https://www.mainstreetmediasavvy.com/wp-content/uploads/2020/01/business-Marketing.jpg">
                <AvailableOffer className='snap-location'> 
                  <Typography variant='h3'><b>Our Promise</b></Typography>
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

          </div>
          
        </main>

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
        
      </div>
    </Page>

  );
}

export default App;
