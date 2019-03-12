import React from 'react'
import { Link } from 'gatsby'
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
import Card from '../../../components/Card/Card'
import CardBody from '../../../components/Card/CardBody'
import Button from '../../../components/CustomButtons/Button'

import productStyle from '../../../assets/jss/views/landingPageSections/productStyle.jsx'
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from '../../../assets/jss/material-kit-pro-react'

import aboutImage from '../../../assets/img/AboutSectionImage.jpg'

const style = {
  ...productStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
}

class SectionAbout extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer
          justify="center"
          style={{ backgroundColor: '#f5f7f8', alignItems: 'center' }}
        >
          <GridItem xs={12} sm={6}>
            <img
              src={aboutImage}
              alt="about image"
              style={{ maxWidth: '105%', float: 'left', margin: 'auto 0' }}
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardBody>
                <h4 className={classes.cardTitle}>Hi I'm Caitlin</h4>

                <div style={{ textAlign: 'left' }}>
                  <p>Hi, my name is Caitlin, nice to meet you!</p>
                  <p>
                    Ever since I could remember I have been passionate about
                    helping others. It wasn’t until I became a recruiter that I
                    realized where my passion and skills would meet.
                  </p>
                  <p>
                    I started Caitlin May Consulting to help the other 95% of
                    qualified job seekers who have been applying to 100’s of
                    jobs with no feedback, thrown into the “overqualified” pile
                    of resumes, ignored by recruiters, and just plain frustrated
                    with the whole job searching process.
                  </p>

                  <p>
                    If you fit into one of those categories, look no further. I
                    am here to help.
                  </p>
                </div>
                <Link to="/about">
                  <Button color="rose">More About Me</Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(style)(SectionAbout)
