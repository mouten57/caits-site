import React, { Component } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Check from '@material-ui/icons/Check'

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'
import Table from '../../../components/Table/Table.jsx'

import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx'
import { add_on_pricing, coaching_process } from './add_on_pricing'

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
                      'Pre-Resume Career Branding Session call (50 minutes)',
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
                      'Follow up thank you letter template, tip sheets and tailored resources geared towards your unique needs',
                      '',
                      simpleCheck,
                      simpleCheck,
                    ],
                    [
                      'Unlimited email support throughout your job search',
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
                  {add_on_pricing.map((item, idx) => (
                    <div key={idx}>
                      <li>
                        <strong>{item.name}</strong>{' '}
                        {item.price ? `- ${item.price}` : <div />}
                      </li>
                      {item.other ? <div>{item.other}</div> : <div />}
                      {item.html ? <div>{item.html()}</div> : <div />}
                    </div>
                  ))}
                </ul>
              </GridItem>
              <GridItem xs={12} className={classes.description}>
                <strong style={{ textDecoration: 'underline' }}>
                  My process is as follows
                </strong>
                :
                <ol>
                  {coaching_process.map((item, idx) => {
                    let val = Object.values(item)
                    return (
                      <li key={idx}>
                        <strong>{Object.keys(item)[0]}</strong>: {val}
                      </li>
                    )
                  })}
                </ol>
              </GridItem>
              <GridItem xs={12} className={classes.description}>
                These calls are guaranteed to give you <strong>clarity</strong>,{' '}
                <strong>motivation</strong> and most importantly,{' '}
                <strong>confidence</strong> in your job search.
              </GridItem>
              <GridItem xs={12}>
                <div
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
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pricingStyle)(SectionPricing)
