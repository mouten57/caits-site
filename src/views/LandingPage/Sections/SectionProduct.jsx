import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import ThumbUp from '@material-ui/icons/ThumbUpRounded'
import Search from '@material-ui/icons/SearchRounded'
import FlightTakeoff from '@material-ui/icons/FlightTakeoffRounded'

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import InfoArea from '../../../components/InfoArea/InfoArea.jsx'

import productStyle from '../../../assets/jss/views/landingPageSections/productStyle.jsx'

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <h2 className={classes.title}>Let's talk product</h2>
            {/* <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5> */}
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Build Your Brand"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={ThumbUp}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Find Your Customers"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Search}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Optimize Your Productivity"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={FlightTakeoff}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(productStyle)(SectionProduct)
