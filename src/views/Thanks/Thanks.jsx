import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from '../../components/Header/Header.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'

import errorPageStyle from '../../assets/jss/views/errorPageStyle'

import image from '../../assets/img/clint-mckoy.jpg'

const style = {
  ...errorPageStyle,
}

class Components extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [1],
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(value) {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <div className={classes.contentCenter}>
              <GridContainer>
                <GridItem
                  md={12}
                  style={{ height: '650px', marginTop: '350px' }}
                >
                  <h1 className={classes.title}>Thanks!</h1>

                  <h4 className={classes.description}>
                    Thank you for signing up, you won't regret it! Why don't you{' '}
                    <a href="/" className={classes.link}>
                      check out the rest of the site
                    </a>{' '}
                    while you're here?
                  </h4>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(errorPageStyle)(Components)
