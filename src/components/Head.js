import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../data/Siteconfig'

const Head = () => {
  return (
    <Helmet>
      <title>{config.title}</title>
      <meta
        name="google-site-verification"
        content="oH5ZbBJcgJ_DX1T0C9fcZmFzWM3AtZICwguJtV1iuSQ"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <html lang="en" />
    </Helmet>
  )
}
export default Head
