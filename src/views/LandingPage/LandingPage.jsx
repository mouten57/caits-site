import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'

import landingPageStyle from '../../assets/jss/views/landingPageStyle.jsx'
import profilePageStyle from '../../assets/jss/views/profilePageStyle.jsx'

// Sections for this page
import SectionProduct from './Sections/SectionProduct.jsx'
import SectionTeam from './Sections/SectionTeam.jsx'
import SectionWork from './Sections/SectionWork.jsx'

import logo from '../../assets/img/website-icon.png'

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div style={{ margin: '0', padding: '0' }}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionTeam />
            <SectionProduct />

            <SectionWork />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(LandingPage)
