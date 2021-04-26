import React from 'react';
import './styles.css';
import {Page} from './Page';
import HeaderContent from './components/HeaderContent';
import PayPerClickSection from './components/PayPerClickSection';
import SEOSection from './components/SEOSection';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import BetterResults from './components/BetterResults';
import OurPromise from './components/OurPromise';
import FooterContent from './components/FooterContent';
import NavBar from './components/NavBar';
import ServicesModal from './components/ServicesModal';
import AboutModal from './components/AboutModal';
import BlogModal from './components/BlogModal';
import ResponsiveNav from './components/ResponsiveNav';



function App() {
  return (
    <Page>
      <div className='content-wrapper'>
        <header>
          <ResponsiveNav></ResponsiveNav>

          <NavBar></NavBar>
          
          <ServicesModal></ServicesModal>
          <AboutModal></AboutModal>
          <BlogModal></BlogModal>

          
        </header>

        <main>
          <section>
            <HeaderContent></HeaderContent>

          </section>
          
          <div className='offers-wrapper'>
            <PayPerClickSection></PayPerClickSection>
            <SEOSection></SEOSection>

            <SocialMediaMarketing></SocialMediaMarketing>
            <BetterResults></BetterResults>
            <OurPromise></OurPromise>

          </div>
          
        </main>

        <FooterContent></FooterContent>
      </div>
    </Page>

  );
}

export default App;
