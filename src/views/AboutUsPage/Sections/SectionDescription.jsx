import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import descriptionStyle from '../../../assets/jss/views/aboutUsSections/descriptionStyle.jsx'

import aboutImage from '../../../assets/img/profilepic.jpeg'

function SectionDescription(props) {
  const { classes } = props
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <img
            src={aboutImage}
            alt="about"
            style={{ maxWidth: '100%', paddingBottom: '20px' }}
          />
        </GridItem>

        <GridItem xs={12} sm={6}>
          <GridContainer
            style={{
              height: '90%',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <GridItem>
              <h1 className={classes.title}>About Me</h1>
              <h4>Meet the founder of Caitlin May Consulting.</h4>
            </GridItem>
            <GridItem>
              <p className={classes.description}>
                My name is Caitlin and ever since I could remember I have been
                passionate about helping others. It wasn’t until I became a
                recruiter that I realized where my passion and skills would
                meet.
              </p>
              <p className={classes.description}>
                If you have worked with recruiters you probably have an opinion
                about them, whether it be good or bad.
              </p>
              <p className={classes.description}>
                But what a recruiter actually does seems to be the most
                misunderstood topic for the average job seeker.
              </p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default withStyles(descriptionStyle)(SectionDescription)
