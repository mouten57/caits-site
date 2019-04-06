import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'
import landingPageStyle from '../assets/jss/views/landingPageStyle.jsx'
import Layout from '../components/layout'
import Thanks from '../views/Thanks/Thanks'

class ThanksPage extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' && window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    return (
      <Layout>
        <Thanks />
      </Layout>
    )
  }
}

export default withRoot(withStyles(landingPageStyle)(ThanksPage))
