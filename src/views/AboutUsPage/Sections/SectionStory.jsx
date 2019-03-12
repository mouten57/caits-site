import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardAvatar from '../../../components/Card/CardAvatar.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import CardFooter from '../../../components/Card/CardFooter.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import teamStyle from '../../../assets/jss/views/aboutUsSections/teamStyle.jsx'

import FaceMarc from '../../../assets/img/faces/marc.jpg'
import FaceChristian from '../../../assets/img/faces/christian.jpg'
import FaceKendall from '../../../assets/img/faces/kendall.jpg'
import FaceAvatar from '../../../assets/img/faces/avatar.jpg'

function SectionTeam(props) {
  const { classes } = props
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h3 className={classes.title}>
            What job seekers think recruiters do:
          </h3>
          <h5 className={classes.description}>Help people find jobs.</h5>
          <h3 className={classes.title}>What recruiters actually do:</h3>
          <h5 className={classes.description}>
            Fill open positions for the company/client.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12}>
          <Card plain>
            <CardBody plain style={{ paddingTop: '0' }}>
              <h4
                className={classes.cardTitle}
                style={{ marginTop: '0', textAlign: 'center' }}
              >
                My Story
              </h4>

              <p className={classes.cardDescription}>
                When I first got into recruiting I also thought I was hired to
                help people find jobs and everyone who was qualified and
                hardworking would have a happy ending.
              </p>
              <p className={classes.cardDescription}>
                Unfortunately that is a fairytale and we now know why you don’t
                see any Disney movies based off <i>"the recruiter who cares"</i>
                .
              </p>
              <p className={classes.cardDescription}>
                I think this actually made me a sub-par recruiter because I
                cared more about the candidate than the client.
              </p>
              <p className={classes.cardDescription}>
                And this is why good recruiters get a bad reputation because
                they are good at filling their jobs for the client, not so much
                helping people find jobs. Yes, they fill their openings and as a
                result candidates get a job and are happy but that is not WHY a
                recruiter is in business.
              </p>
              <p className={classes.cardDescription}>
                So you can imagine my frustration when I only had openings for a
                very small pool of candidates with X,Y & Z skills and I would
                have 50+ job seekers reaching out to me daily via phone, email
                and social media who were highly qualified and driven, but they
                did not have the X,Y and Z skills that I needed for my client.
              </p>
              <p className={classes.cardDescription}>
                Basically I could only help about 5% of the entire job seeker
                population and that <strong>SUCKED</strong>.
              </p>
              <p className={classes.cardDescription}>
                It especially broke my heart when I had top-notch, recently laid
                off candidates who had several University Degrees and
                certification along with 15+ years of experience and were
                applying to my positions that were entry level job.
              </p>
              <p className={classes.cardDescription}>
                To me it seemed like there is clearly a huge misunderstanding
                between the way employers look for candidates and how candidates
                look for employers.
              </p>
              <hr />
              <p className={classes.cardDescription}>
                And that is why I started Caitlin May Consulting. To help the
                other 95% of qualified job seekers who have been applying to
                100’s of jobs with no feedback, thrown into the “overqualified”
                pile of resumes, ignored by recruiters, and just plain
                frustrated with the whole job searching process.
              </p>
              <p className={classes.cardDescription}>
                If you fit into one of those categories, look no further. I am
                here to help.
              </p>
              <p className={classes.cardDescription}>
                As a previous “sub-par” agency recruiter, who now works for the
                largest e-commerce company in the world, I know a thing or two
                about how to get a employers attention and I want to use those
                tips to help you find your dream job as well.
              </p>
              <p className={classes.cardDescription}>
                Believe it or not, you have more control over your job seeking
                journey than you think and I am here to help guide you!
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default withStyles(teamStyle)(SectionTeam)
