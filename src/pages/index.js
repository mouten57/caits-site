import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'
import landingPageStyle from '../assets/jss/views/landingPageStyle.jsx'
import Layout from '../components/layout'
import LandingPage from '../views/LandingPage/LandingPage'

class HomeIndex extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' && window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    )
  }
}

export default withRoot(withStyles(landingPageStyle)(HomeIndex))
