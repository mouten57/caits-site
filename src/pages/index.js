import React from 'react'
import { Link } from 'gatsby'

import '../assets/scss/material-kit-pro-react.scss?v=1.3.0'
import Layout from '../components/layout'
import LandingPage from '../views/LandingPage/LandingPage'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    )
  }
}

export default HomeIndex
