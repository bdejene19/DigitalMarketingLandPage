import React from 'react';
import { HomeHeader, HomePageWrapper, MainContentAd, MainPageCaptivatingWrapper, OffersWrapper, AvailableOffer} from './components/styledComponents'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import {Typography, Button } from '@material-ui/core'

function App() {
  return (
    <div>
      <HomePageWrapper>
        <img src="https://www.squadhelp.com/images/logo/logodesi9/33389highmark_seo_6.png" alt='marketing logo' className='navImg'></img>
        <HomeHeader>
            <Button color='primary'>Home</Button >
            <Button color='primary'>Services</Button >
            <Button color='primary'>Value Proposition</Button >
            <Button color='primary'>About</Button >
            <Button color='primary'>Blog</Button >
            <Button color='primary'>Contact Us</Button >
        </HomeHeader>
        <div style={{justifyContent: 'center', marginTop: '20%', display: "flex", flexDirection: 'row'}}>
          <LocalPhoneIcon color="primary" fontSize='large'></LocalPhoneIcon>

          <Typography variant='h5' color="primary" style={{width: 'max-content'}}>
            1-800-694-5832
          </Typography>
        </div>
      </HomePageWrapper>

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


      <section>
        <article>
          <OffersWrapper inputImage="https://images.all-free-download.com/images/graphiclarge/digital_marketing_background_woman_laptop_business_elements_decor_6838079.jpg">
            <AvailableOffer bgColor='lightblue'>
              <div>
                <Typography variant='h3'>Pay Per Click Advertising</Typography>

              </div>

              <div>
                <Typography variant='p'><t></t>When thinking of advertising your website online to promote your goods or services, the first main question you need to ask yourself is: are you looking to receive immediate first page rankings</Typography>
              </div>
              

              <div className='awards'>
                <img src="https://nmpidigital.com/wp-content/uploads/2018/05/effective-digital-marketing-awards.png" alt="digital marketing finalist"></img>
                <img src="https://digitalagencynetwork.com/wp-content/uploads/2019/01/ava-digital-awards.png" alt="ava digital markreting award"></img>
                <img src="https://tradablebits.com/blog/content/images/2016/02/banner.png" alt="TBITSY award"></img>
              </div>
              <Button variant='outlined' color='primary' size='small'>Learn More</Button>
            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>

      <section>
        <article>
          <OffersWrapper inputImage="https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg">
            <AvailableOffer>

            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>

      <section>
        <article>
          <OffersWrapper inputImage="https://www.martechcube.com/wp-content/uploads/2020/02/17-1024x576.jpg">
            <AvailableOffer>

            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>

      <section>
        <article>
          <OffersWrapper inputImage="https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg">
            <AvailableOffer>

            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>

      <section>
        <article>
          <OffersWrapper inputImage="https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg">
            <AvailableOffer>

            </AvailableOffer>
          </OffersWrapper>
        </article>
      </section>
     


          
    </div>
  );
}

export default App;
