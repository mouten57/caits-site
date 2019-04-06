import React from 'react'
import Layout from '../../components/layout'
import withStyles from '@material-ui/core/styles/withStyles'
import withRoot from '../../withRoot'
import AboutUsPage from '../../views/AboutUsPage/AboutUsPage'
import aboutUsStyle from '../../assets/jss/views/aboutUsStyle.jsx'

class About extends React.Component {
  render() {
    return (
      <Layout>
        <AboutUsPage />
      </Layout>
    )
  }
}

export default withRoot(withStyles(aboutUsStyle)(About))
