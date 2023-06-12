---
slug: "/google-analytics-on-gatsby"
date: "2023-06-11"
title: "Installing Google Analytics 4 on Gatsby"
tags: ["marketing", "tech", "howto"]
---

I'm building a data management toolchain for marketers at work this year, and one of the things that's been on
my backlog for a while is diving in to Google Analytics to understand how it works and how ingestion of its data
differs from media execution platforms like The Trade Desk or Facebook or Google Ads etc. Google Analytics houses a
brand's "first party data", which means a lot of things but most relevant to my concern is that this data is in some
sense bespoke to any given brand. This presents a challenge when your product's secret sauce is around denormalizing
data across dozens of different marketing platforms in order to trivialize the reporting and analytics process. But
that's for another time - for now, here's a few steps on how I got my GA4 key installed on this Gatsby site, hopefully
it's useful to someone.

## Set up GA
Set up a [Google Analytics](https://analytics.google.com/) account. When you get through the setup wizard, you'll see
   a "Measurement ID". Hold on to that guy.
## Install the Gatsby plugin
Follow the instructions to install
   [gatsby-plugin-google-tag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) and paste the recommended
   configuration into your `gatsby-config.js`:
```
   // In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}
```

Unless you know you need it, you can delete everything beneath `GA-TRACKING_ID`.  

## Install dotenv
`GA-TRACKING_ID` is going to be that Measurement ID from step 1. The tracking ID will be public no matter what you do as
it will be loaded in as an html script and visible to anyone who opens dev tools. However, you may want to avoid
managing a public and a private .env for the same project, so we'll set this var up as we would any other environment
variable. First, we install `dotenv`. Do the following:
1) `npm i dotenv`
2) At the top of `gatsby-config.js` paste: `require('dotenv').config()`

## Add env var to local code.
Create a `.env` file and if you don't have one, create a `.gitignore` file and add the text `.env` to it to prevent you
from accidentally checking in your `.env` file. In the `.env` file, add
`GA_TRACKING_ID=<YOUR_MEASUREMENT_ID_FROM_EARLIER>`.

Now, go back to your `gatsby-config.js` where you added the plugin boilerplate earlier, and on the line right under
`trackignIds`, replace the text `"GA-TRACKING_ID"` with `process.env.GA_TRACKING_ID`.

## Test locally
Locally build the site in production mode by executing: `gatsby build && gatsby serve` and navigate the port on which it
runs. I think by default this will be `localhost:9000`. You can do two things to test here:
1) Check to see if the tag script is included in the `<body>`. It should look something like `<script async=""
   src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>`
2) Navigate to your GA page and see if some events have fired (this may take a few minutes to pipe through)

If the tag is there and data is showing up, move on to the next step! If it doesn't work, probably just ask ChatGPT.

## Add Measurement ID to build
This guide is targeted towards beginners, so it may be unlikely that you have a CI/CD pipe set up. Nevertheless, if you
do, you are going to want to include the `GA_TRACKING_ID` secret into the injected environment of your build process. In
my case I am using Github actions, so under the `build` step where I am generating the static files of my application, I
have modified it with an `env` prop like so:
```
    - name: Build Gatsby site
      run: npm run build
      env:
        GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
```

Then, in the Github browser UI for my repository, I navigated to the `settings` section, then `secrets`->`actions` and
entered my secret to be made available during the build process. If you're using Gatsby's built in CI/CD or CircleCI or
Jenkins or - God forbid - Atlassian Bamboo, the specifics will be different but the idea will be the same. You need to
make the secret available in the build process environment so that the `dotenv` file can source it during the `build`
process invocation.

## That's it!
And that's all it takes. Since no one visits this site, I'm now ready to collect user data with a sample of 1 and figure
out how I'm going to denormalize this into something that's useful for Media Traders. Thanks for reading!