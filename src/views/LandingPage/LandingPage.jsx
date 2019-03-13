import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'
import landingPageStyle from '../../assets/jss/views/landingPageStyle.jsx'
//import profilePageStyle from '../../assets/jss/views/profilePageStyle.jsx'
// Sections for this page
import SectionProduct from './Sections/SectionProduct.jsx'
import SectionIntro from './Sections/SectionIntro.jsx'
import SectionWork from './Sections/SectionWork.jsx'
import SectionAbout from './Sections/SectionAbout.jsx'

import logo from '../../assets/img/website-icon-white.png'

class LandingPage extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' && window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes, ...rest } = this.props
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // )
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div>
        <Parallax image={require('../../assets/img/bg8.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={5} md={4}>
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyItems: 'center',
                    height: '100%',
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ justifySelf: 'center' }}
                  >
                    Your Story Starts With Us.
                  </h2>
                </div>
              </GridItem>
              <GridItem xs={12} sm={7} md={8}>
                <img src={logo} style={{ width: '100%' }} alt="logo" />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionIntro />
            <SectionProduct />
            <SectionWork />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
