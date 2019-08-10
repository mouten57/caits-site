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
import { GridList } from '@material-ui/core'

class SectionIntro extends Component {
  render() {
    const { classes } = this.props
    const how_to = [
      'Network directly with recruiters and hiring managers.',
      'Establish yourself as a thought leader in your field.',
      'Target specific organizations and industries.',
      'Promote yourself to potential employers.',
    ]
    return (
      <div className={` ${classes.pricing}`}>
        <div className={classes.container}>
          <GridContainer {...this.props}>
            <GridItem
              xs={12}
              className={`${classes.mlAuto} ${classes.mrAuto} `}
              style={{ textAlign: 'center' }}
            >
              <h2 className={classes.title} style={{ alignText: 'center' }}>
                My Process
              </h2>
            </GridItem>
            <GridItem xs={12}>
              <h5 className={classes.description}>
                First we start with a 50 minute resume consultation call. During
                this call we dive deeper into your career history including
                discussing your strengths, previous achievements, and various
                strategic questions to discover your “All-star” qualities and
                how we can showcase those skills on your resume.{' '}
              </h5>
              <h5 className={classes.description}>
                Next I will “do my thang” and create your unique and
                personalized resume within 5-7 days. Once completed we will
                schedule another call to go through your resume to ensure you
                are 100% satisfied with the final product.
              </h5>
              <h5 className={classes.description}>
                After the resume is complete we will move on to optimizing your
                LinkedIn profile to reflect your new stellar resume and display
                your personal brand.
              </h5>
              <h5 className={classes.description}>
                In 2-3 days you will have your new “All-Star” LinkedIn profile,
                2 versions of your resume, dynamic cover-letter, and follow-up
                documents.{' '}
              </h5>
              <h5 className={classes.description}>
                Lastly, we will set up a final 50 minute call to develop a
                strategic plan on how to:{' '}
              </h5>
              <ul
                className={classes.description}
                style={{ listStylePosition: 'inside' }}
              >
                {how_to.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h5 className={classes.description}>
                Sign up today for a FREE resume consultation and how we can get
                you set up for job search success!{' '}
              </h5>

              <GridItem xs={12}>
                <a
                  href="https://caitlinmayconsulting.as.me/FREECONSULT"
                  target="_blank"
                >
                  <Button color="primary" round style={{ margin: '0 auto' }}>
                    Get started now!
                  </Button>
                </a>
              </GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionIntro)
