// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

// laptop screen size: 1279px;

export const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1050px",
    laptopL: "1440px",
    desktop: "2560px"
  };
  
  export const device = {
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    tablet: `max-width: ${size.tablet}`,
    laptop: `max-width: ${size.laptop}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktop: `max-width: ${size.desktop}`,
    desktopL: `max-width: ${size.desktop}`
  };
  