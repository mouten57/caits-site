import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'
// core components

// import Header from '../../components/Header/Header.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'
// import Footer from '../../components/Footer/Footer.jsx'
// sections for this page
// import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import SectionDescription from './Sections/SectionDescription.jsx'
import SectionStory from './Sections/SectionStory.jsx'
// import SectionServices from './Sections/SectionServices.jsx'
// import SectionOffice from './Sections/SectionOffice.jsx'
import SectionContact from './Sections/SectionContact'

import aboutUsStyle from '../../assets/jss/views/aboutUsStyle.jsx'

class AboutUsPage extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' && window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Parallax
          image={require('../../assets/img/CMC_BG_2.jpg')}
          filter="white"
          small
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              {/* <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>About Me</h1>
                <h4>Meet the founder of Caitlin May Consulting.</h4>
              </GridItem> */}
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription />
            <SectionStory />
            {/* <SectionServices />
              <SectionOffice /> */}
            <SectionContact />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage)
