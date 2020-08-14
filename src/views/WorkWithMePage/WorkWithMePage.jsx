import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import SectionIntro from './Sections/SectionIntro'
import SectionPicNBlurb from './Sections/SectionPicNBlurb'
import WhyChoseCMC from './Sections/WhyChooseCMC'
import MyProcess from './Sections/MyProcess'
import SectionProjects from './Sections/SectionProjects'

import SectionPricing from './Sections/SectionPricing'
import projectsStyle from '../../assets/jss/views/sectionsSections/projectsStyle'
import landingPageStyle from '../../assets/jss/views/landingPageStyle.jsx'

// const style = {
//   ...projectsStyle,
//   justifyContentCenter: {
//     justifyContent: 'center',
//   },
// }

const WorkWithMe = (props) => {
  const { classes } = props

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer>
          <SectionIntro />
          <SectionPicNBlurb />
          <WhyChoseCMC />
          <MyProcess />
          <SectionPricing />
          <SectionProjects />
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(landingPageStyle)(WorkWithMe)
