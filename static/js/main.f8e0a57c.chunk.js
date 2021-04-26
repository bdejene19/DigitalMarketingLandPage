(this.webpackJsonpdmlandingpage=this.webpackJsonpdmlandingpage||[]).push([[0],{47:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(1),r=t.n(a),c=t(15),s=t.n(c),l=(t(47),t(6)),d=t(7),o="375px",j="425px",b="768px",h="1050px",x="1440px",O="2560px",m={mobileS:"max-width: ".concat("320px"),mobileM:"max-width: ".concat(o),mobileL:"max-width: ".concat(j),tablet:"max-width: ".concat(b),laptop:"max-width: ".concat(h),laptopL:"max-width: ".concat(x),desktop:"max-width: ".concat(O),desktopL:"max-width: ".concat(O)};function u(){var e=Object(l.a)(["\n    overflow: auto;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n    // come back to finish how to add specific destination for the scroll flex;\n    .content-wrapper {\n        width: 100vw;\n        height: 100vh;\n        overflow-y: scroll;\n        scroll-snap-type: y mandatory;\n\n        .snap-location {\n            scroll-snap-align: start;\n        }\n    }\n\n    .sidepanel {\n        visibility: none;\n    }\n    \n\n    @media "," {\n        max-width: ",";\n        display: block;\n\n       \n\n    }\n\n    @media "," {\n        max-width: ",";\n    }\n\n    @media "," {\n        max-width: ",";\n    }\n\n"]);return u=function(){return e},e}var p=d.a.div(u(),m.laptop,m.laptopL,m.tablet,m.laptop,m.mobileS,m.tablet);function g(){var e=Object(l.a)(["\n\n    grid-row: 3;\n    justify-self: flex-start;\n    display: grid;\n    height: auto;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    grid-gap: 0.5em;   \n\n    > div {\n        background-color: white;\n        display: flex;\n        color: black;\n        flex-direction: row;\n        gap: 1em;\n        padding: 1em;\n        border-radius: 2%;\n    }\n\n    img {\n        width: 3vw;\n        height: 8vh;\n        align-items: center;\n        justify-self: center;\n        align-self: center;\n    }\n\n    @media screen and (",") {\n       font-size: 8px;\n       grid-gap: 1em;\n    }\n\n    @media screen and (",") {\n        grid-row: 2;\n        > div {\n            flex-direction: column;\n            border-radius: 1%;\n        }\n\n        img {\n            width: 5vw;\n        }\n    }\n"]);return g=function(){return e},e}function v(){var e=Object(l.a)(["\n    position: absolute;\n    width: 80%;\n    height: auto;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    border-top: solid orange 8px;\n    background-color: white;\n    margin-left: 10%;\n    z-index: 1;\n    visibility: hidden;\n    transform: translateY(20%);\n    padding: 1em;\n    grid-column-gap: 1em;\n    justify-content: space-around;\n    \n    a {\n        color: black;\n        text-decoration: none;\n    }\n    div {\n        padding-bottom: 1em;\n\n        .longSub-title {\n            width: max-content;\n            border-bottom: solid orange 3px;\n\n        }\n    }\n\n    .sub-title {\n        border-bottom: solid orange 3px;\n        width: 100%;\n    }\n\n    @media screen and (",") {\n        width: 10%;\n        display: none;\n    }\n"]);return v=function(){return e},e}function f(){var e=Object(l.a)(["\n    display: grid;\n    grid-template-columns: repeat(9, 1fr);\n    grid-template-rows: 1fr;\n    color: white;\n    background: linear-gradient(365deg, blue, purple);\n\n    div {\n        padding: 0.5em;\n        border-left: solid white 2px;\n        margin-top: 2em;\n        margin-bottom: 2em;\n    }\n\n    @media screen and (",") {\n        grid-template-columns: repeat(4, 1fr);\n        div {\n            border-right: solid white 2px;\n            border-left: none;\n            padding-right: 1em;\n            &&:nth-child(odd) {\n                color: black;\n            }\n        }\n\n        \n    }\n\n    @media screen and (",") {\n        grid-template-columns: repeat(2, 1fr);\n    }\n"]);return f=function(){return e},e}function y(){var e=Object(l.a)(["\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 3fr;\n    grid-column-gap: 1em;\n    text-align: center;\n    color: blue;\n    div {\n        background: white;\n        border-radius: 2%;\n        padding: 0.25em;\n        \n    }\n    .process-icon {\n        font-size: 50px;\n    }\n    h5 {\n        color: blue;\n    }\n    .processText {\n        color: darkgrey;\n    }\n\n    @media screen and (",") {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        grid-column-gap: 0;\n        grid-row-gap: 0.5em;\n        grid-row: 2;\n\n        .process-icon {\n            font-size: 30px;\n        }\n\n        h5 {\n            font-size: 20px;\n        }\n        img {\n            width: 75%;\n        }\n\n       \n    }\n "]);return y=function(){return e},e}function w(){var e=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    padding: 1.5em;\n    color: white;\n    width: fit-content;\n    height: 90%;\n    width: 40%;\n    background: linear-gradient(200deg, rgba(0, 0, 225, 0.85), rgba(148, 0, 221, 0.85));\n    transform: translate(5vw, 6vh);\n\n    .pText{ \n        align-self: center;\n    }\n\n    .awards {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n        \n        img {\n            height: 10vw;\n            width: 12vw;\n            padding: 1em;\n        }\n    }\n\n    button {\n        width: fit-content;\n        height: fit-content;\n        justify-items: end;\n        align-self: flex-end;\n        align-items: flex-end;\n        color: #FF4500;\n        border: solid 1px #FF4500;\n    }\n\n    button:hover {\n        background-color: #FF4500\t;\n        color: white;\n    }\n\n    @media screen and (",") {\n        width: 50%;\n        \n    }\n\n    @media screen and (",") {\n        width: 70%;\n        h4 {\n            font-size: 24px;\n        }\n\n        .awards {\n            text-align: right;\n            display: inline-block;\n            img {\n                padding: 2%;\n            }\n        }\n\n        button {\n            width: 100%;\n        }\n\n        \n\n        br > button { \n            color: black;\n        }\n    }\n\n    @media screen and (max-width: 550px) {\n        .learnMore-process {\n            visibility: hidden;\n        }\n    }\n\n"]);return w=function(){return e},e}function k(){var e=Object(l.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-image: url(",");\n    background-size: cover; \n"]);return k=function(){return e},e}function N(){var e=Object(l.a)(["\n    grid-column: 1;\n    padding-left: 10.5vw;\n    button {\n        width: fit-content;\n        height: fit-content;\n        justify-items: end;\n        align-self: flex-end;\n        align-items: flex-end;\n        color: #FF4500;\n        background-color: white;\n        border: solid 3px #FF4500;\n    }\n\n    .mainContentAd-text {\n        margin-bottom: 2em;\n        margin-top: 0.5em;\n    }\n\n    button:hover {\n        background-color: #FF4500\t;\n        color: white;\n    }\n\n\n\n    @media screen and (",") {\n        padding-left: 0;\n        text-align: center;\n\n        button {\n            width: max-content;\n        }\n\n        .mainContentAd-text {\n            margin: 0.5em;\n        }\n    }\n"]);return N=function(){return e},e}function S(){var e=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1;\n    background-color: white;\n    padding-top: 10vh;\n    color: pink;\n    \n    #caption {\n        background-color: #3f51b5;\n        padding-bottom: 0;\n        background-image: linear-gradient(65deg, #3f51b5, #9c27b0);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -moz-background-clip: text;\n        -webkit-text-fill-color: transparent; \n        -moz-text-fill-color: transparent;\n\n    }\n\n\n    & img {\n        width: 35vw;\n        justify-self: left;\n    }\n\n    @media screen and (",") {\n        margin: 0;\n        padding: 1em;\n\n        .affiliatedLogos img {\n            height: 18vh;\n        }\n    }\n\n    @media screen and (",") {\n        display: flex;\n        padding-top: 10%;\n        flex-direction: column;\n\n        .marketing-photo {\n            visibility: hidden;\n        }\n\n       \n        .affiliated-businesses {\n            width: 80%;\n        }\n    }\n"]);return S=function(){return e},e}function M(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n        & button {\n        width: max-content;\n        padding: 1em;\n        margin: 0;\n    }\n    @media screen and  (",") {\n        display: none;\n    }\n\n  \n"]);return M=function(){return e},e}function A(){var e=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    background-color: white;\n\n    .navImg {\n        width: 14vw;\n        height: 14vh;\n\n    }\n\n    .phone-contact {\n        display: flex;\n        justify-content: center; \n        align-items: center; \n        flex-direction: row;\n        \n        a {\n            text-decoration: none;\n        }\n\n    }\n\n    .openbtn {\n        display: none;\n    }\n\n    .openbtn:focus{\n        outline: 0;\n    }\n\n\n    .sidepanel {\n        display: none;\n        border: solid green 10px;\n    }\n\n    @media screen and  (",") {\n        .phone-contact {\n            grid-column: 3;\n        }\n\n        .sidepanel{\n            display: block;\n        }\n\n        .openbtn {\n            display: block;\n            height: 100%;\n            font-size: 44px;\n           \n            color: darkgrey;\n            background: white;\n          \n        }\n    }\n\n    @media screen and (",") {\n        .contact-phoneNumber {\n            display: none;\n        }\n        .phone-contact {\n            justify-self: right;\n            padding: 1em;\n        }\n\n        .openbtn {\n            padding-right: 1em;\n        }\n    }\n    \n"]);return A=function(){return e},e}var E=d.a.div(A(),m.laptop,m.tablet),P=d.a.nav(M(),m.laptop),C=d.a.div(S(),m.laptop,m.tablet),T=d.a.div(N(),m.tablet),F=d.a.div(k(),(function(e){return e.inputImage})),z=d.a.div(w(),m.laptop,m.tablet),L=d.a.div(y(),m.tablet),B=d.a.div(f(),m.laptop,m.tablet),I=d.a.div(v(),m.laptop),R=d.a.div(g(),m.laptop,m.tablet),D=t(67),W=t(68);function _(){return Object(i.jsx)("div",{children:Object(i.jsx)("article",{children:Object(i.jsxs)(C,{children:[Object(i.jsxs)(T,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"h4",color:"primary",id:"caption",children:"Decades Of Experience That Shines Through Our Work."}),Object(i.jsx)(D.a,{variant:"h5",color:"secondary",className:"mainContentAd-text",children:"Award winning and certified in SEO practices."}),Object(i.jsx)(W.a,{variant:"contained",className:"mainContentAd-text",children:"START YOUR FREE STRATEGY SESSION NOW!"})]}),Object(i.jsx)("img",{src:"https://nextlevelsem.com/wp-content/home-static/hrayr/assets/homepage-slide1-v001.webp",alt:"affilitated logos",className:"affiliated-businesses"})]}),Object(i.jsx)("img",{src:"https://nextlevelsem.com/wp-content/home-static/hrayr/assets/home-hero-graphic-med.webp",alt:"marketing",className:"marketing-photo"})]})})})}function G(){return Object(i.jsx)("section",{children:Object(i.jsx)("article",{children:Object(i.jsx)(F,{inputImage:"https://images.all-free-download.com/images/graphiclarge/digital_marketing_background_woman_laptop_business_elements_decor_6838079.jpg",children:Object(i.jsxs)(z,{className:"snap-location",children:[Object(i.jsx)("div",{children:Object(i.jsx)(D.a,{variant:"h4",children:Object(i.jsx)("b",{children:"Pay Per Click Advertising"})})}),Object(i.jsx)("div",{className:"pText",children:Object(i.jsx)(D.a,{variant:"body2",children:"When thinking of advertising your website online to promote your goods or services, the first main question you need to ask yourself is: are you looking to receive immediate first page rankings"})}),Object(i.jsxs)("div",{className:"awards",children:[Object(i.jsx)("img",{src:"https://nmpidigital.com/wp-content/uploads/2018/05/effective-digital-marketing-awards.png",alt:"digital marketing finalist"}),Object(i.jsx)("img",{src:"https://digitalagencynetwork.com/wp-content/uploads/2019/01/ava-digital-awards.png",alt:"ava digital markreting award"}),Object(i.jsx)("img",{src:"https://tradablebits.com/blog/content/images/2016/02/banner.png",alt:"TBITSY award"})]}),Object(i.jsx)(W.a,{variant:"outlined",color:"primary",size:"medium",children:"Learn More"})]})})})})}function Y(){return Object(i.jsx)("section",{children:Object(i.jsx)("article",{children:Object(i.jsx)(F,{inputImage:"https://www.explainervideoagency.com/blog/wp-content/uploads/2017/01/Main-Header-5-Advanced-You-Tube-Video-Optimization-Tactics.jpg",children:Object(i.jsxs)(z,{className:"snap-location",children:[Object(i.jsx)("div",{children:Object(i.jsx)(D.a,{variant:"h4",children:Object(i.jsx)("b",{children:"Search Engine Optimization"})})}),Object(i.jsx)("div",{className:"pText",children:Object(i.jsx)(D.a,{variant:"body2",children:"SEO, or Search Engine Optimization, is truly an art form. If executed properly, SEO can be one of the best forms of marketing you can do to promote your website, while being the most cost effective."})}),Object(i.jsxs)("div",{className:"awards",children:[Object(i.jsx)("img",{src:"https://websiterelease.com/wp-content/uploads/2016/11/Search-Engine-Optimization-SEO-banner.jpg",alt:"SEO practices"}),Object(i.jsx)("img",{src:"https://www.boostability.com/wp-content/uploads/2015/03/10BestSEO-Logo-419x500.png",alt:"Top 10 SEO"}),Object(i.jsx)("img",{src:"https://www.seoworks.co.uk/wp-content/uploads/2018/06/Google-Partner-Specialist-Badge.png",alt:"Google Partners"})]}),Object(i.jsx)(W.a,{variant:"outlined",color:"primary",size:"medium",children:"Learn More"})]})})})})}function V(){return Object(i.jsx)("section",{children:Object(i.jsx)("article",{children:Object(i.jsx)(F,{inputImage:"https://www.vaishnogsoftwares.com/images/00SocialMediaMarketing.jpg",children:Object(i.jsxs)(z,{className:"snap-location",children:[Object(i.jsx)("div",{children:Object(i.jsx)(D.a,{variant:"h4",children:Object(i.jsx)("b",{children:"Social Media Marketing"})})}),Object(i.jsx)("div",{className:"pText",children:Object(i.jsx)(D.a,{variant:"body2",children:"Social Media Marketing has become extremely prevalent over the years, especially since the creation of Facebook in early 2004. There are multiple ways to advertise your website on various social media platforms. There are paid ads, which work similarly to a search engine\u2019s pay-per-click model, that enable you to pay a small premium when your ad is viewed."})}),Object(i.jsxs)("div",{className:"awards",children:[Object(i.jsx)("img",{src:"/mediaMarketingExpert.png",alt:"Social media marketing experts"}),Object(i.jsx)("img",{src:"https://pbs.twimg.com/media/D9desyNVAAA4pvB?format=jpg&name=900x900",alt:"Social Media Marketing Awards Finalist"}),Object(i.jsx)("img",{src:"https://ml.globenewswire.com/Resource/Download/c3cf6ad0-aceb-47af-8a4e-89629f30c702?size=3",alt:"Content Marketing Awards (CMA)"})]}),Object(i.jsx)(W.a,{variant:"outlined",color:"primary",size:"medium",children:"Learn More"})]})})})})}var H=t(36),q=t.n(H),U=t(37),J=t.n(U),K=t(38),Q=t.n(K);function X(){return Object(i.jsx)("section",{children:Object(i.jsx)("article",{children:Object(i.jsx)(F,{inputImage:"https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2017/04/people-digital-content-data-ss-1920.jpg",children:Object(i.jsxs)(z,{className:"snap-location",children:[Object(i.jsx)(D.a,{variant:"h4",children:Object(i.jsx)("b",{children:"Our Process to Better Marketing, Leads, and Results"})}),Object(i.jsxs)(L,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(q.a,{color:"inherit",className:"process-icon"}),Object(i.jsx)(D.a,{variant:"h5",children:Object(i.jsx)("b",{children:"Discover"})}),Object(i.jsx)(D.a,{variant:"body2",className:"processText",children:"We offer a FREE Audit of your SEM, SEO, SMM initiative(s) and competitor analysis. Then we deliver a detailed customized proposal at NO COST!"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(J.a,{color:"inherit",className:"process-icon"}),Object(i.jsx)(D.a,{variant:"h5",children:Object(i.jsx)("b",{children:"Create"})}),Object(i.jsx)(D.a,{variant:"body2",className:"processText",children:"We will create a custom-tailored marketing strategy for your business, which includes: video, photography, infographics, articles, and more."})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(Q.a,{color:"inherit",className:"process-icon"}),Object(i.jsx)(D.a,{variant:"h5",children:Object(i.jsx)("b",{children:"Evolve"})}),Object(i.jsx)(D.a,{variant:"body2",className:"processText",children:"As technology, market trends, and budgets change, we continue to adapt your marketing strategy, delivering consistent exponential growth."})]})]}),Object(i.jsx)("br",{}),Object(i.jsx)(W.a,{variant:"outlined",color:"primary",size:"medium",className:"learnMore-process",children:"Sechdule A Call!"})]})})})})}function Z(){return Object(i.jsx)("section",{children:Object(i.jsx)("article",{children:Object(i.jsx)(F,{inputImage:"https://www.mainstreetmediasavvy.com/wp-content/uploads/2020/01/business-Marketing.jpg",children:Object(i.jsxs)(z,{className:"snap-location",children:[Object(i.jsx)(D.a,{variant:"h4",children:Object(i.jsx)("b",{children:"Our Promise"})}),Object(i.jsxs)(R,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"/guarenteeRibbon.png",alt:"blue ribbon"}),Object(i.jsxs)("div",{className:"promiseText",children:[Object(i.jsx)(D.a,{variant:"subtitle1",children:Object(i.jsx)("b",{children:"NLM Guarentee"})}),Object(i.jsx)(D.a,{variant:"subtitle2",children:"We work for you, and you only. We commit to one client, per industry, per..."})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"guarenteeRibbon.png",alt:"guarentee ribbon"}),Object(i.jsxs)("div",{className:"promiseText",children:[Object(i.jsx)(D.a,{variant:"subtitle1",children:Object(i.jsx)("b",{children:"PPC Guarentee"})}),Object(i.jsx)(D.a,{variant:"subtitle2",children:"If you don\u2019t receive at least a 3-1 Return on Investment in Months..."})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"/guarenteeRibbon.png",alt:"blue ribbon"}),Object(i.jsxs)("div",{className:"promiseText",children:[Object(i.jsx)(D.a,{variant:"subtitle1",children:Object(i.jsx)("b",{children:"SEO Guarentee"})}),Object(i.jsx)(D.a,{variant:"subtitle2",children:"We will rank you on the first page of the major search engines for at..."})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/business-687/32/icons-19-2-512.png",alt:"data"}),Object(i.jsxs)("div",{className:"promiseText",children:[Object(i.jsx)(D.a,{variant:"subtitle1",children:Object(i.jsx)("b",{children:"Datacentric Management"})}),Object(i.jsx)(D.a,{variant:"subtitle2",children:"Our team eliminates guesswork with proprietary tracking and..."})]})]})]}),Object(i.jsx)(W.a,{variant:"outlined",color:"primary",size:"medium",style:{gridRow:4},children:"Schedule A Call!"})]})})})})}function $(){return Object(i.jsx)("footer",{children:Object(i.jsxs)(B,{className:"snap-location",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Miami Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone: ",Object(i.jsx)("br",{}),"1-800-694-5832 ",Object(i.jsx)("br",{}),"Adress: ",Object(i.jsx)("br",{}),"2340 Wonderland Blvd, Miami Fl 33137"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Ft. Lauderdale Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone:",Object(i.jsx)("br",{}),"(954) 372-4132 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"1 E. Broward Blvd. Suite 700 Fort Lauderdale, FL 33301"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Orlando Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone:",Object(i.jsx)("br",{}),"(407) 751-1828 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"121 South Orange Avenue Suite 1500 Orlando, FL 32801"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Tampa Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone:",Object(i.jsx)("br",{}),"(813) 547-8569 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"601 N. Ashley Dr., Suite 1100-1002 Tampa, FL 33602"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Los Angeles Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone:",Object(i.jsx)("br",{}),"(310) 744-6597 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"433 North Camden Drive 6th Floor Beverly Hills, CA 90210"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"San Fran Cisco Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",className:"contact-text",children:["Phone:",Object(i.jsx)("br",{}),"(415) 849-3277 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"388 Market Street, Suite 1300 San Francisco, CA 94111"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"New York"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",children:["Phone:",Object(i.jsx)("br",{}),"(646) 494-3612 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"Empire State Building, 350 Fifth Avenue, 59th floor New York City, NY 10118"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Brooklyn Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",children:["Phone:",Object(i.jsx)("br",{}),"(646) 499-2955 ",Object(i.jsx)("br",{}),"Address:",Object(i.jsx)("br",{}),"147 Front Street Brooklyn, NY 11201"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"subtitle2",children:Object(i.jsx)("b",{children:"Atlanta Office"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(D.a,{variant:"body1",children:["Phone:",Object(i.jsx)("br",{}),"(470) 205-5160 ",Object(i.jsx)("br",{}),"Address: ",Object(i.jsx)("br",{}),"1201 West Peachtree Street Atlanta, GA 30309"]})]})]})})}var ee=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"openbtn",onClick:function(){document.getElementById("mySidepanel").style.cssText="\n        width: 30vw;\n        transition: 0.5s ease;\n    \n    "},children:"\u2630"})})},ne=t(25),te=t.n(ne),ie=t(39),ae=t.n(ie),re=function(e){var n=document.getElementById(e);n.style.transform="translate(0, 0)",n.style.transition="all 0.25s",n.style.visibility="visible",n.style.opacity=1},ce=function(e){var n=document.getElementById(e);n.style.transform="translate(0, 20%)",n.style.visibility="hidden",n.style.opacity=0,n.style.transition="all 0.25s",n.style.transitionDelay="0.1s"};function se(){return Object(i.jsxs)(E,{id:"homePage-top",className:"snap-location",children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(i.jsx)(ee,{}),Object(i.jsx)("img",{src:"https://www.squadhelp.com/images/logo/logodesi9/33389highmark_seo_6.png",alt:"marketing logo",className:"navImg"})]}),Object(i.jsxs)(P,{children:[Object(i.jsx)(W.a,{color:"primary",disableRipple:!0,children:"Home"}),Object(i.jsxs)(W.a,{color:"primary",disableRipple:!0,onMouseEnter:function(){return re("services")},onMouseLeave:function(){return ce("services")},children:["Services",Object(i.jsx)(te.a,{})]}),Object(i.jsx)(W.a,{color:"primary",disableRipple:!0,children:"Value Proposition"}),Object(i.jsxs)(W.a,{color:"primary",disableRipple:!0,onMouseEnter:function(){return re("about")},onMouseLeave:function(){return ce("about")},children:["About",Object(i.jsx)(te.a,{})]}),Object(i.jsxs)(W.a,{color:"primary",disableRipple:!0,onMouseEnter:function(){return re("blog")},onMouseLeave:function(){return ce("blog")},children:["Blog",Object(i.jsx)(te.a,{})]}),Object(i.jsx)(W.a,{color:"primary",disableRipple:!0,children:"Contact Us"})]}),Object(i.jsxs)("div",{className:"phone-contact",children:[Object(i.jsx)(ae.a,{color:"primary",fontSize:"large"}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"h5",color:"primary",className:"contact-phoneNumber",style:{width:"max-content"},children:"1-800-694-5832"})})]})]})}var le=t(28);function de(){var e;return Object(i.jsxs)(I,{id:"services",onMouseEnter:function(){return re("services")},onMouseLeave:function(){return ce("services")},children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Pay-Per-Click"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Pay-Per-Click PPC"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Display Advertising"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Mobile Advertising"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Video PPC"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"E-commerce"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Bing Ads"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Amazon Ads"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Advertising Consultation"})})})})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,(e={variant:"subtitle1",className:"sub-title"},Object(le.a)(e,"className","longSub-title"),Object(le.a)(e,"children",Object(i.jsx)("b",{children:"Search Engine Optimization"})),e))}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Search Engine Optimization (SEO)"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Localized Map SEO"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"E-commerce SEO"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Specialties"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Legal Marketing"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Medical Marketing"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Social Media Marketing"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Paid Social Media Marketing"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Organic Social Media Marketing"})})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Website Development"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Web Design"})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Video Production and Video Marketing"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Marketing Automation"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Email Marketing"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Content"})})}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"body2",children:"Paid Content"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Geofencing"})})})}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Reputation Management"})})})})]}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"https://nextlevelsem.com/wp-content/uploads/2019/11/menu-ipad.png",alt:"services"})})]})}function oe(){return Object(i.jsxs)(I,{id:"about",onMouseEnter:function(){return re("about")},onMouseLeave:function(){return ce("about")},children:[Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"About"})})})}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Meet our team"})})})}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"longSub-title",children:Object(i.jsx)("b",{children:"Certifications and Credentials"})})})}),Object(i.jsx)("img",{src:"https://nextlevelsem.com/wp-content/uploads/2019/11/menu-laptop.png",alt:"about"})]})}function je(){return Object(i.jsxs)(I,{id:"blog",onMouseEnter:function(){return re("blog")},onMouseLeave:function(){return ce("blog")},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Google News"})})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"SEO"})})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Legal Marketing"})})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Social Media"})})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Pay Per Click"})})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(D.a,{variant:"subtitle1",className:"sub-title",children:Object(i.jsx)("b",{children:"Web Design"})})})]}),Object(i.jsx)("img",{src:"https://nextlevelsem.com/wp-content/uploads/2019/11/menu-client.png",alt:"blog"})]})}var be=t(26),he=t.n(be);function xe(){return Object(i.jsxs)("div",{id:"mySidepanel",className:"sidepanel",children:[Object(i.jsx)("a",{href:"javascript:void(0)",className:"closebtn",onClick:function(){document.getElementById("mySidepanel").style.width="0"},children:"\xd7"}),Object(i.jsx)("a",{href:"#",children:"Home"}),Object(i.jsxs)("a",{href:"#",children:["Services ",Object(i.jsx)(he.a,{})]}),Object(i.jsxs)("a",{href:"#",children:["Value Proposition",Object(i.jsx)(he.a,{})," "]}),Object(i.jsx)("a",{href:"#",children:"About"}),Object(i.jsxs)("a",{href:"#",children:["Blog ",Object(i.jsx)(he.a,{})]}),Object(i.jsx)("a",{href:"#",children:"Contact Us"})]})}var Oe=function(){return Object(i.jsx)(p,{children:Object(i.jsxs)("div",{className:"content-wrapper",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)(xe,{}),Object(i.jsx)(se,{}),Object(i.jsx)(de,{}),Object(i.jsx)(oe,{}),Object(i.jsx)(je,{})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)("section",{children:Object(i.jsx)(_,{})}),Object(i.jsxs)("div",{className:"offers-wrapper",children:[Object(i.jsx)(G,{}),Object(i.jsx)(Y,{}),Object(i.jsx)(V,{}),Object(i.jsx)(X,{}),Object(i.jsx)(Z,{})]})]}),Object(i.jsx)($,{})]})})},me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),r(e),c(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(Oe,{})}),document.getElementById("root")),me()}},[[53,1,2]]]);
//# sourceMappingURL=main.f8e0a57c.chunk.js.map