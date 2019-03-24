import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import testimonialsStyle from '../assets/jss/views/sectionsSections/testimonialsStyle.jsx'
import Warning from './Typography/Warning.jsx'
import Star from '@material-ui/icons/Star'

const star = ({ ...props }) => {
  const { classes } = props
  return (
    <>
      <Warning>
        <Star className={classes.starIcons} />
      </Warning>
      <Warning>
        <Star className={classes.starIcons} />
      </Warning>
      <Warning>
        <Star className={classes.starIcons} />
      </Warning>
      <Warning>
        <Star className={classes.starIcons} />
      </Warning>
      <Warning>
        <Star className={classes.starIcons} />
      </Warning>
    </>
  )
}

export default withStyles(testimonialsStyle)(star)
