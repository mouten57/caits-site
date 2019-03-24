import React from 'react'
import Layout from '../../components/layout'
import withStyles from '@material-ui/core/styles/withStyles'
import withRoot from '../../withRoot'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'

import teamsStyle from '../../assets/jss/views/sectionsSections/teamsStyle.jsx'
import teamStyle from '../../assets/jss/views/landingPageSections/teamStyle.jsx'
// import workWithMe from '../../assets/img/work-with-me.png'

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  },
}

const WorkWithMe = props => {
  const { classes } = props

  return (
    <Layout>
      <div className={`${classes.team} ${classes.section}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              style={{ marginTop: '150px', marginBottom: '100px' }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: '40px',
                }}
              >
                Coming Soon!
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Layout>
  )
}

export default withRoot(withStyles(style)(WorkWithMe))
