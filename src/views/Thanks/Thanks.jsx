import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import errorPageStyle from '../../assets/jss/views/errorPageStyle'
import image from '../../assets/img/clint-mckoy.jpg'

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
    const { classes } = this.props
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
                  <h1 className={classes.title}>Success!</h1>

                  <h4 className={classes.description} style={{ width: '100%' }}>
                    <a href="/" className={classes.link}>
                      Back Home
                    </a>{' '}
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
