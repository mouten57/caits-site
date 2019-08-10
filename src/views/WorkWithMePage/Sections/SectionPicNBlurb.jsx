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
import pic from '../../../assets/img/work_with_me_profile_pic.jpg'

class SectionIntro extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={` ${classes.pricing}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <img
                src={pic}
                alt="about"
                style={{ maxWidth: '100%', paddingBottom: '20px' }}
              />
            </GridItem>

            <GridItem xs={12} sm={6}>
              <GridContainer
                style={{
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <GridItem>
                  <p className={classes.description}>
                    I hand-craft dynamic resumes and LinkedIn profiles that get
                    noticed and get results (AKA jobs). I work with motivated
                    college grads to CEO’s, who are ready to take accelerate
                    their job searches through the creation of personalized
                    branding documents and one-one coaching services. I’ve
                    helped thousands of job-seekers between recruiting and
                    consulting and I am confident I can help you too.
                  </p>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionIntro)
