import React, { Component } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import CardFooter from '../../../components/Card/CardFooter.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'

import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx'
import logo from '../../../assets/img/website-icon.png'

class SectionIntro extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={` ${classes.pricing}`} style={{ marginTop: '150px' }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Work With Me!</h2>
              <div className={classes.intro}>
                <h5 className={classes.description}>
                  Think of Caitlin May Consulting as your on personal hype women
                  and you are the “main performer”. My job is to{' '}
                  <b>
                    <i>inspire you</i>
                  </b>
                  ,
                  <b>
                    <i> motivate you</i>
                  </b>{' '}
                  and{' '}
                  <b>
                    <i>empower you</i>
                  </b>{' '}
                  in your job search. Your wins are my wins.
                </h5>
                <div>
                  <h5 className={classes.description}>
                    I can assure you I offer more than your average resume
                    writer because I AM a current recruiter who knows how to:{' '}
                  </h5>
                  <ol
                    style={{
                      width: '80%',
                      margin: '30px auto 40px auto',
                      color: '#999999',
                    }}
                  >
                    <li>Make a resume stand out from a crowd</li>
                    <li>Effectively network to get your foot in the door</li>
                    <li>Interview like a champ </li>
                    <li>Boost your confidence to new levels </li>
                    <li>Crush your job search.</li>
                  </ol>
                </div>
              </div>
            </GridItem>
            <GridContainer
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <GridItem xs={6}>
                <img src={logo} alt="logo" style={{ width: 'inherit' }} />
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionIntro)
