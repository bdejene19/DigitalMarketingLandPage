import React from 'react';
import { HomeHeader, HomePageWrapper, MainContentAd, MainPageCaptivatingWrapper, OffersWrapper, AvailableOffer} from './components/styledComponents'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import {Typography, Button } from '@material-ui/core';
import './styles.css';
const scrollDirection = () => {
    console.log('hello');

}

function App() {
  return (
    <div>
      <header>
        <HomePageWrapper className='hello'>
          <img src="https://www.squadhelp.com/images/logo/logodesi9/33389highmark_seo_6.png" alt='marketing logo' className='navImg'></img>
          <HomeHeader>
              <Button color='primary' disableRipple>Home</Button >
              <Button color='primary' disableRipple>Services</Button >
              <Button color='primary' disableRipple>Value Proposition</Button >
              <Button color='primary' disableRipple>About</Button >
              <Button color='primary' disableRipple>Blog</Button >
              <Button color='primary' disableRipple>Contact Us</Button >
          </HomeHeader>
          <div style={{justifyContent: 'center', marginTop: '20%', display: "flex", flexDirection: 'row'}}>
            <LocalPhoneIcon color="primary" fontSize='large'></LocalPhoneIcon>

            <Typography variant='h5' color="primary" style={{width: 'max-content'}}>
              1-800-694-5832
            </Typography>
          </div>
        </HomePageWrapper>
      </header>

      <main>
        <section>
          <article>
            <MainPageCaptivatingWrapper>
              <MainContentAd>
                  <Typography variant="h3" color="primary" className='caption'>Decades of experience that is demonstrated through our the care we put into our work</Typography>
                  <br></br>
                  <Typography variant='h4' color='secondary'>Award winning and certified in SEO practices.</Typography>
                  <br></br>
                  <Button variant='contained' color='primary'>Learn more</Button>
                  <div className='affiliatedLogos'>
                    <img src="https://i.pcmag.com/imagery/reviews/04u4r8E0NHva7mQ3Bnozbh6-9.1569482850.fit_scale.size_1600x900.jpg" alt='google analytics'></img>
                    <img src="https://getvectorlogo.com/wp-content/uploads/2019/09/facebook-marketing-partner-vector-logo.png" alt='facebook markreting'></img>
                    <img src="https://bestaffiliatemarketingtools.org/wp-content/uploads/2019/12/amazon-associates-logo.png" alt='amazon affiliation'></img>
                    <img src="https://images.youracclaim.com/size/680x680/images/deed794e-0844-4eba-b699-35b964c58e59/Facebook_blueprint_-_certified_buyer-01.png" alt='facebook blueprint'></img>
                  </div>
              </MainContentAd>
              <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F974512548%2F960x0.jpg%3Ffit%3Dscale" alt='marketing'></img>
            </MainPageCaptivatingWrapper>
          </article>
        </section>
        

        <section>
          <article>
            <OffersWrapper inputImage="https://images.all-free-download.com/images/graphiclarge/digital_marketing_background_woman_laptop_business_elements_decor_6838079.jpg">
              <AvailableOffer bgColor='lightblue'>
                <div>
                  <Typography variant='h3'><b>Pay Per Click Advertising</b></Typography>
                </div>

                <div className='pText'>
                  <Typography variant='p'>When thinking of advertising your website online to promote your goods or services, the first main question you need to ask yourself is: are you looking to receive immediate first page rankings</Typography>
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
              <AvailableOffer>
                <div>
                  <Typography variant='h3'><b>Search Engine Optimization</b></Typography>
                </div>

                <div className='pText'>
                  <Typography variant='p'>SEO, or Search Engine Optimization, is truly an art form. If executed properly, SEO can be one of the best forms of marketing you can do to promote your website, while being the most cost effective.</Typography>
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


        <section onScroll={scrollDirection()}>
          <article>
            <OffersWrapper inputImage="https://www.vaishnogsoftwares.com/images/00SocialMediaMarketing.jpg">
              <AvailableOffer>
                <div>
                  <Typography variant='h3'><b>Social Media Marketing</b></Typography>
                </div>

                <div  className='pText'>
                  <Typography variant='p'>Social Media Marketing has become extremely prevalent over the years, especially since the creation of Facebook in early 2004. There are multiple ways to advertise your website on various social media platforms.
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
      </main>
      
    </div>
  );
}

export default App;
