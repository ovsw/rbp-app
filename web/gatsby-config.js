// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteNav: [
      {
        title: 'Future Families',
        slug: '/future-families/',
        children: [
          {
            title: 'Programs',
            slug: '/programs/',
            children: [
              {
                title: 'Pine Cone Camp',
                slug: '/programs/pine-cone-camp/',
                children: []
              },
              {
                title: 'Day Camp',
                slug: '/programs/day-camp/',
                children: []
              },
              {
                title: 'Teen Camp',
                slug: '/programs/teen-camp/',
                children: []
              },
              {
                title: 'Leader in Training',
                slug: '/programs/leader-in-training/',
                children: []
              }
            ]
          },
          {
            title: 'Activities',
            slug: '/activities/',
            children: [
              {
                title: 'Clubs & Electives',
                slug: '/activities/clubs-and-electives/',
                children: []
              },
              {
                title: 'Learn to Swim',
                slug: '/activities/learn-to-swim/',
                children: []
              },
              {
                title: 'Calendar',
                slug: '/activities/calendar/',
                children: []
              },
              {
                title: 'Special Events',
                slug: '/activities/special-events/',
                children: []
              }
            ]
          },
          {
            title: 'Transportation',
            slug: '/transportation/',
            children: []
          },
          {
            title: 'Beforecare & Aftercare',
            slug: '/beforecare-aftercare/',
            children: []
          },
          {
            title: 'Dates & Rates',
            slug: '/dates-and-rates/',
            children: []
          },
          {
            title: 'Reviews',
            slug: '/reviews/',
            children: []
          },
          {
            title: 'Tuition Assistance',
            slug: '/tuition-assistance/',
            children: []
          },
          {
            title: 'FAQs',
            slug: '/faqs/',
            children: []
          }
        ]
      },
      {
        title: 'About us',
        slug: '/about/',
        children: [
          {
            title: 'Our Directors',
            slug: '/our-directors/',
            children: []
          },
          {
            title: 'Our Staff',
            slug: '/our-staff/',
            children: []
          },
          {
            title: 'History',
            slug: '/history/',
            children: []
          },
          {
            title: 'Location',
            slug: '/location/',
            children: []
          },
          {
            title: 'ACA Accreditation',
            slug: '/aca-accreditation/',
            children: []
          }
        ]
      },
      {
        title: 'Current Families',
        slug: '/current-families/',
        children: [
          {
            title: 'Camper Photo App',
            slug: '/camper-photo-app/',
            children: []
          },
          {
            title: 'Camp Store',
            slug: 'https://www.bunkline.com/category-s/602.htm',
            children: []
          },
          {
            title: 'Lunch Menu',
            slug: '/lunch-menu/',
            children: []
          },
          {
            title: 'Refer A Family',
            slug: '/refer-a-family/',
            children: []
          },
          {
            title: 'Parent Login',
            slug: 'https://ramblingpines.campintouch.com/v2/login/login.aspx',
            children: []
          }
        ]
      },
      {
        title: 'Staff',
        slug: '/staff/',
        children: [
          {
            title: 'Welcome',
            slug: '/welcome/',
            children: []
          },
          {
            title: 'Employment',
            slug: '/employment/',
            children: []
          },
          {
            title: 'Summer Dates',
            slug: '/summer-dates/',
            children: []
          },
          {
            title: 'Apply',
            slug: '/staff-application/',
            children: []
          }
        ]
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}
