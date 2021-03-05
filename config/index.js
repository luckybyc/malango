module.exports = {
  //-- SITE SETTINGS -----
  author: "@Lusajo  Malango",
  siteTitle: "Lusajo  Malango Portfolio",
  siteShortTitle: "lusajo.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Lusajo  Malango, a product manager and freelance web developer based in Hamburg.",
  siteUrl: "http://localhost:8000/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Lusajo  Malango", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "WhatsApp",
      url: "https://www.xing.com/profile/Konstantin_Muenster",
    },
    {
      name: "Twitter",
      url: "https://www.xing.com/profile/Konstantin_Muenster",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/konstantin-muenster/",
    },
    {
      name: "GitHub",
      url: "https://github.com/Lusajo  Malango",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Skills",
        url: "/#skills",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
