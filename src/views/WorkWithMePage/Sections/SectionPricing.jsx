import React, { Component } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
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
import Danger from '../../../components/Typography/Danger.jsx'

import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx'

import bg11 from '../../../assets/img/bg8.jpg'
import city from '../../../assets/img/bg8.jpg'
import cardBlog3 from '../../../assets/img/bg8.jpg'

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
              {/* CARD 1 */}
              <GridItem xs={12} sm={4}>
                <Card pricing plain>
                  <CardBody pricing plain>
                    <h6 className={classes.cardCategory}>BEGINNER</h6>

                    <h4 className={classes.cardTitle}>$500 - $900</h4>

                    <ul>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Pre-Resume Career Branding Session (50 minutes).
                      </li>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Two completed resumes with 2 rounds of revisions.
                        <Tooltip
                          id="tooltip-bottom"
                          title="(1) Targeted visually appealing word format resume and
                          (1) Applicant Tracking System (ATS) optimized resume in
                          word and pdf format. Includes 2 rounds of revisions."
                          placement="bottom"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button
                            style={{
                              display: 'inline',
                              width: '50px',
                              margin: '0',
                              padding: '2px',
                              textTransform: 'lowercase',
                            }}
                            color="transparent"
                          >
                            (...see more)
                          </Button>
                        </Tooltip>
                      </li>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Customizable Cover-letter
                      </li>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Post-Resume document branding finalization and job
                        search plan (50 minutes).
                      </li>
                      {/* <li>
                        <Danger>
                          <Close />
                        </Danger>{' '}
                        LinkedIn Profile Revamp.
                      </li>
                      <li>
                        <Danger>
                          <Close />
                        </Danger>{' '}
                        Personalized job search strategy roadmap session (50
                        minutes).
                      </li>
                      <li>
                        <Danger>
                          <Close />
                        </Danger>{' '}
                        Follow up thank you letter template, tip sheets and
                        tailored resources geared towards your unique needs.
                      </li> */}
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Unlimited email support
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter pricing className={classes.justifyContentCenter}>
                    <Button
                      color="white"
                      round
                      buttonRef={node => {
                        this.anchorElBottom1 = node
                      }}
                      onClick={() => this.handleClickButton('openBottom1')}
                    >
                      See more
                    </Button>
                    <Popover
                      classes={{
                        paper: classes.popover,
                      }}
                      open={this.state.openBottom1}
                      anchorEl={this.anchorElBottom1}
                      anchorReference={'anchorEl'}
                      onClose={() => this.handleClosePopover('openBottom1')}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <h4 className={classes.popoverHeader}>Pricing:</h4>
                      <div className={classes.popoverBody}>
                        <ul>
                          <li>Entry-level: $500</li>
                          <li>Mid-level: $700</li>
                          <li>Executive: $900</li>
                        </ul>
                      </div>
                    </Popover>
                  </CardFooter>
                </Card>
              </GridItem>
              {/* CARD 2 */}
              <GridItem xs={12} sm={4}>
                <Card pricing color="success">
                  <CardBody pricing>
                    <h6 className={classes.marginBottom30}>EXPERIENCED</h6>
                    <h4 className={classes.cardTitleWhite}>$700 - $1100</h4>
                    <ul>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Includes all features of the Beginner package, PLUS:
                      </li>
                      <li>
                        <Check /> LinkedIn Profile Revamp
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter pricing className={classes.justifyContentCenter}>
                    <Button
                      color="white"
                      round
                      buttonRef={node => {
                        this.anchorElBottom2 = node
                      }}
                      onClick={() => this.handleClickButton('openBottom2')}
                    >
                      See more
                    </Button>
                    <Popover
                      classes={{
                        paper: classes.popover,
                      }}
                      open={this.state.openBottom2}
                      anchorEl={this.anchorElBottom2}
                      anchorReference={'anchorEl'}
                      onClose={() => this.handleClosePopover('openBottom2')}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <h4 className={classes.popoverHeader}>Pricing:</h4>
                      <div className={classes.popoverBody}>
                        <ul>
                          <li>Entry-level: $700</li>
                          <li>Mid-level: $900</li>
                          <li>Executive: $1100</li>
                        </ul>
                      </div>
                    </Popover>
                  </CardFooter>
                </Card>
              </GridItem>
              {/* CARD 3 */}
              <GridItem xs={12} sm={4}>
                <Card pricing plain>
                  <CardBody pricing>
                    <h6 className={classes.cardCategory}>PROFESSIONAL</h6>

                    <h4 className={classes.cardTitle}>$1000 - $1400</h4>

                    <ul>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Includes all features of the Beginner and Experienced
                        packages, PLUS:
                      </li>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Personalized job search strategy roadmap session (50
                        minutes)
                      </li>
                      <li>
                        <Success>
                          <Check />
                        </Success>{' '}
                        Follow up thank you letter template, tip sheets and
                        tailored resources geared towards your unique needs.
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter pricing className={classes.justifyContentCenter}>
                    <Button
                      color="success"
                      round
                      buttonRef={node => {
                        this.anchorElBottom3 = node
                      }}
                      onClick={() => this.handleClickButton('openBottom3')}
                    >
                      See more
                    </Button>
                    <Popover
                      classes={{
                        paper: classes.popover,
                      }}
                      open={this.state.openBottom3}
                      anchorEl={this.anchorElBottom3}
                      anchorReference={'anchorEl'}
                      onClose={() => this.handleClosePopover('openBottom3')}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <h4 className={classes.popoverHeader}>Pricing:</h4>
                      <div className={classes.popoverBody}>
                        <ul>
                          <li>Entry-level: $1000</li>
                          <li>Mid-level: $1200</li>
                          <li>Executive: $1400</li>
                        </ul>
                      </div>
                    </Popover>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12}>
                <h5
                  className={classes.description}
                  style={{
                    width: '90%',
                    margin: '10px auto',
                    textAlign: 'center',
                  }}
                >
                  I also offer: Comprehensive Job Search Coaching and Interview
                  Coaching services (2 sessions minimum). <br />To learn more,
                  please email{' '}
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
        {/* Pricing 4 END */}
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionPricing)
