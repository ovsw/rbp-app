const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Rambling Pines Day Camp', // Navigation and Site Title
  siteTitleAlt: 'Rambling Pines', // Alternative Site title for SEO
  siteTitleShort: 'Rambling Pines', // short_name for manifest
  siteHeadline: 'Wood Fired Neapolitan Pizza Truck', // Headline for schema.org JSONLD
  siteUrl: 'https://www.corvobianco.pizza', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Website for Corvo Bianco Wood Fired Cookery',
  author: 'OVS Websites', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@corvobianco.pizza', // Twitter Username
  ogSiteName: 'corvobianco.pizza', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-146677776-1',
  gtmID: 'GTM-PWZ6K2Z',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
}
