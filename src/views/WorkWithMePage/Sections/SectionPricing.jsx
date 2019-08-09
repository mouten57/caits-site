import React, { Component } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Edit from '@material-ui/icons/Edit'
import Weekend from '@material-ui/icons/Weekend'
import Home from '@material-ui/icons/Home'
import Business from '@material-ui/icons/Business'
import AccountBalance from '@material-ui/icons/AccountBalance'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
import Popover from '@material-ui/core/Popover'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import CardFooter from '../../../components/Card/CardFooter.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'
import Success from '../../../components/Typography/Success.jsx'
import Table from '../../../components/Table/Table.jsx'
import Danger from '../../../components/Typography/Danger.jsx'

import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx'

class SectionPricing extends Component {
  anchorElBottom1 = null
  anchorElBottom2 = null
  anchorElBottom3 = null

  constructor(props) {
    super(props)
    this.state = {
      openBottom1: false,
      openBottom2: false,
      openBottom3: false,
    }
  }

  handleClickButton(state) {
    this.setState({
      [state]: true,
    })
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false,
    })
  }

  render() {
    const { classes, ...rest } = this.props
    console.log(this.props)

    const simpleCheck = [{ color: 'success', icon: Check }].map((prop, key) => {
      return (
        <Button simple justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      )
    })

    return (
      <div className="cd-section" {...rest} style={{ width: '100%' }}>
        <div className={classes.pricing}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} style={{ textAlign: 'center' }}>
                <h2 className={classes.title}>Pricing</h2>
                <h5 className={classes.description}>
                  When reviewing the following packages, note that my typical
                  client loses at least $1,000+ every week they are unemployed
                  (this does not include health insurance & other benefits).
                  When you take into account the $5,000 - $10,000 salary
                  increases clients often receive with their new job offer, your
                  package is a small investment that will pay for itself many
                  times over.
                </h5>
              </GridItem>
              <GridItem xs={12} style={{ textAlign: 'center' }}>
                <Table
                  tableHead={[
                    'JOB SEARCH PACKAGES',
                    'Bronze',
                    'Gold',
                    'Platinum',
                  ]}
                  tableData={[
                    [
                      'Pre-Resume Career Branding Session call (50 minutes): Instead of sending over a long questionnaire, I will schedule a call where I will learn more about your background, figure out your strengths, weakness and “All Star” qualities to showcase your resume in the best light possible',
                      simpleCheck,
                      simpleCheck,
                      simpleCheck,
                    ],
                    [
                      '(1) Targeted visually appealing (ATS) optimized resume in word and pdf format. Includes 2 rounds of revisions',
                      simpleCheck,
                      simpleCheck,
                      simpleCheck,
                    ],
                    [
                      '(1) Networking Resume – Condensed version of your resume that can be used for a broad range of opportunities',

                      '',
                      '',
                      simpleCheck,
                    ],
                    [
                      'Customizable Cover-letter that you can easily covert to every job you apply to',
                      simpleCheck,
                      simpleCheck,
                      simpleCheck,
                    ],
                    [
                      'Post-Resume document branding finalization and networking plan call (30 minutes)',
                      simpleCheck,
                      simpleCheck,
                      simpleCheck,
                    ],
                    ['LinkedIn Profile Revamp', '', simpleCheck, simpleCheck],
                    [
                      'Personalized job search strategy roadmap session (50 minutes)',
                      '',
                      '',
                      simpleCheck,
                    ],
                    [
                      'Ability to have your resume posted over 60 niche job sites based on your background so that recruiters can find you even quicker.  Completely confidential searching and posting',
                      '',
                      '',
                      simpleCheck,
                    ],
                    [
                      'Follow up thank you letter template, tip sheets and tailored resources geared towards your unique needs.',
                      '',
                      simpleCheck,
                      simpleCheck,
                    ],
                    [
                      'Unlimited email support throughout your job search.',
                      simpleCheck,
                      simpleCheck,
                      simpleCheck,
                    ],
                    ['Entry-Level', '$600', '$800', ' $1000'],
                    ['Professional', '$800', '$1000', ' $1200'],
                    ['Executive', '$1000', '$1200', ' $1400'],
                  ]}
                  customCellClasses={[
                    classes.textLeft,
                    classes.textRight,
                    classes.textRight,
                  ]}
                  customClassesForCells={[0, 4, 5]}
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.textCenter,
                    classes.textCenter,
                  ]}
                  customHeadClassesForCells={[0, 4, 5]}
                />
              </GridItem>
              <GridItem xs={12} className={classes.description}>
                <h5>
                  <strong>Additional add-on options</strong>:
                </h5>
                <ul>
                  <li>
                    <strong>
                      Standard Applicant Tracking System (ATS) optimized resume
                      in word and pdf format + 2 rounds of revisions
                    </strong>{' '}
                    - $400 - $800
                    <br />
                    **Prices vary based off experience level**
                  </li>
                  <li>
                    <strong>
                      Tailored cover-letter, email and thank you letter template
                    </strong>{' '}
                    - $75
                  </li>
                  <li>
                    <strong>Complete LinkedIn Profile Revamp</strong> – $350
                  </li>
                  <li>
                    <strong>
                      Personalized job search strategy roadmap session (50
                      minutes)
                    </strong>{' '}
                    - $200 <br />
                    On this 50 minute call we will develop a strategic plan on
                    how to:{' '}
                    <ul style={{ marginBottom: '0' }}>
                      <li>
                        Network directly with recruiters and hiring managers.
                      </li>
                      <li>
                        Establish yourself as a thought leader in your field.
                      </li>
                      <li>Target specific organizations and industries.</li>
                      <li>Promote yourself to potential employers.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Live Resume review via google hangout</strong> -
                    $200 <br />
                    <i>
                      During this 20 minute call I will go over your current
                      resume while sharing my screen. I will provide you with in
                      depth advice and suggestions on how you can revamp your
                      current resume, add in specific key words and get past the
                      “black hole” applicant tracking system (ATS).
                    </i>
                  </li>
                  <li>
                    <strong>
                      Pdf tip sheets and instructional how-to videos on how
                      based on your specific needs
                    </strong>{' '}
                    - $25{' '}
                  </li>
                  <li>
                    <strong>Job Coaching 1 on 1 sessions</strong>: In these
                    sessions I personally work one on one with you to help you
                    clearly identify your skills and using those skills to help
                    you discover your perfect job and how to land that job.
                  </li>{' '}
                </ul>
              </GridItem>
              <GridItem xs={12} className={classes.description}>
                My process is as follows:
                <ol>
                  <li>
                    <strong>Learn</strong>: Get to know you: Your past career
                    history, likes, dislikes, “need to have’s” and “could live
                    without’s”.
                  </li>
                  <li>
                    <strong>Identify</strong>: Find out what fuels you and
                    ignites your passion and use that to discover your dream
                    job.
                  </li>
                  <li>
                    <strong>Strategize</strong>: Establish a personalized
                    roadmap to get you from where you are currently to receiving
                    the offer for your dream job.
                  </li>{' '}
                  <li>
                    <strong>Engage</strong>: Teach you how to engage with other
                    professionals that are currently in your dream job and how
                    to utilize those connections to land your dream job. These
                    calls are guaranteed to give you clarity, motivation and
                    most importantly, confidence in your job search.
                  </li>
                </ol>
              </GridItem>
              <GridItem xs={12} className={classes.description}>
                These calls are guaranteed to give you <strong>clarity</strong>,{' '}
                <strong>motivation</strong> and most importantly,{' '}
                <strong>confidence</strong> in your job search.
              </GridItem>
              <GridItem xs={12}>
                <h5
                  className={classes.description}
                  style={{
                    margin: '10px auto',
                    textAlign: 'center',
                  }}
                >
                  <h3>Coaching Prices:</h3>
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontWeight: 'bolder',
                    }}
                  >
                    Three 50 Minute Sessions: <br />
                    <div style={{ color: 'red' }}>
                      (Entry-level) - $400
                      <br />
                      (Professional) - $600 <br />
                      (Executive-Level) - $800{' '}
                    </div>
                  </div>
                  <br />
                  <br />
                  To learn more, please email{' '}
                  <a
                    href={`mailto:caitlin@caitlinmayconsulting.com?subject=I'm interested in your career consulting!&body=Hi, I'd like to learn more about your career consulting services.%0D%0A%0D%0AMy Name:%0D%0APhone Number:%0D%0AI'm interested in and excited about:%0D%0AMessage:%0D%0A%0D%0AThanks!%0D%0A(name)`}
                  >
                    caitlin@caitlinmayconsulting.com
                  </a>
                </h5>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionPricing)
