import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import CustomInput from '../../../components/CustomInput/CustomInput.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'
import workStyle from '../../../assets/jss/views/landingPageSections/workStyle.jsx'

class SectionWork extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formFields: {
        name: '',
        email: '',
        message: '',
      },
    }
  }

  handleChange = e => {
    let formFields = { ...this.state.formFields }
    formFields[e.target.name] = e.target.value
    this.setState({
      formFields,
    })
  }
  render() {
    const { name, email, message } = this.state
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Work with me!</h2>
            <h4 className={classes.description}>
              Leave me a detailed message and I'll get back to you as soon as
              possible!
            </h4>
            <form
              action="https://formspree.io/Caitlin@CaitlinMayConsulting.com"
              method="POST"
            >
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    inputProps={{
                      name: 'name',
                      value: name,
                      onChange: this.handleChange,
                    }}
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    inputProps={{
                      name: 'email',
                      value: email,
                      type: 'email',
                      onChange: this.handleChange,
                    }}
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    name: 'message',
                    value: message,
                    onChange: this.handleChange,
                    multiline: true,
                    rows: 4,
                  }}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button color="rose" type="submit">
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(workStyle)(SectionWork)
