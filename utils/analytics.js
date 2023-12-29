// utils/analytics.js

export const GA_TRACKING_ID = 'G-0SNW4BMYSS'; // Replace with your actual tracking ID

// Function to track pageviews
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }
};
