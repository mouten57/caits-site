import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import SectionIntro from './Sections/SectionIntro'
import SectionProjects from './Sections/SectionProjects'
import SectionPricing from './Sections/SectionPricing'
import projectsStyle from '../../assets/jss/views/sectionsSections/projectsStyle'

const style = {
  ...projectsStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  },
}

const WorkWithMe = props => {
  const { classes } = props

  return (
    <div className={`${classes.team} ${classes.section}`}>
      <div className={classes.container}>
        <GridContainer>
          <SectionIntro />
          {/* <SectionProjects /> */}

          <SectionPricing />
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(style)(WorkWithMe)
