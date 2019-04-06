import React from 'react'
import Layout from '../../components/layout'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ContactUsPage from '../../views/ContactUsPage/ContactUsPage'
import contactUsStyle from '../../assets/jss/views/contactUsStyle.jsx'
import withRoot from '../../withRoot'

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <ContactUsPage />
      </Layout>
    )
  }
}

export default withRoot(withStyles(contactUsStyle)(Contact))
