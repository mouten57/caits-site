import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardAvatar from '../../../components/Card/CardAvatar.jsx'
import CardHeader from '../../../components/Card/CardHeader.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import CardFooter from '../../../components/Card/CardFooter.jsx'

import Muted from '../../../components/Typography/Muted.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'

import cardProfile1Square from '../../../assets/img/faces/card-profile1-square.jpg'
import cardProfile2Square from '../../../assets/img/faces/card-profile2-square.jpg'
import cardProfile4Square from '../../../assets/img/faces/card-profile4-square.jpg'
import cardProfile6Square from '../../../assets/img/faces/card-profile6-square.jpg'

import teamsStyle from '../../../assets/jss/views/sectionsSections/teamsStyle.jsx'
import teamStyle from '../../../assets/jss/views/landingPageSections/teamStyle.jsx'
import profilepic from '../../../assets/img/profilepic.jpeg'

const style = {
  ...teamsStyle,
  // ...teamStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  },
}

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div
        className={`${classes.team} ${classes.section}`}
        style={{
          backgroundImage: `url(${profilepic})`,
          backgroundPositionX: '20%',
          backgroundPositionY: 'center',

          backgroundSize: '40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            />
          </GridContainer>
          <GridContainer direction={'row-reverse'}>
            <GridItem xs={12} sm={5} md={5}>
              <Card profile>
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Ready to escape your corporate job?
                  </h4>

                  <p className={classes.description}>
                    Join me to learn how to unlock your inner greatness andbuild
                    a profitable business you love!
                  </p>
                  <Button color="rose" round style={{ width: '100%' }}>
                    <p style={{ width: '100%' }}>Learn More!</p>
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(SectionTeam)
