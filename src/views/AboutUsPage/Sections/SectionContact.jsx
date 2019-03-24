import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
// import FormControl from '@material-ui/core/FormControl'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import CustomInput from '../../../components/CustomInput/CustomInput.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'

import contactStyle from '../../../assets/jss/views/aboutUsSections/contactStyle.jsx'

class SectionContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formFields: {
        name: '',
        email: '',
        message: '',
        phone: '',
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
    const { name, email, phone, message } = this.state
    const { classes } = this.props
    return (
      <div className={classes.aboutUs}>
        <GridContainer>
          <GridItem
            md={8}
            sm={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <h2 className={classNames(classes.title, classes.textCenter)}>
              Want to work with me?
            </h2>
            <h4 className={classNames(classes.description, classes.textCenter)}>
              Shoot me a message and I'll get back to you as soon as possible!
            </h4>
            <form
              action="https://formspree.io/Caitlin@CaitlinMayConsulting.com"
              method="POST"
            >
              <CustomInput
                labelText="Your Name"
                inputProps={{
                  name: 'name',
                  value: name,
                  onChange: this.handleChange,
                }}
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Email address"
                inputProps={{
                  name: 'email',
                  value: email,
                  type: 'email',
                  onChange: this.handleChange,
                }}
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Phone"
                inputProps={{
                  name: 'phone',
                  value: phone,
                  type: 'tel',
                  onChange: this.handleChange,
                }}
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Your message"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  name: 'message',
                  value: message,
                  onChange: this.handleChange,
                  multiline: true,
                  rows: 4,
                }}
              />
              <div className={classes.textCenter}>
                <Button color="primary" round type="submit">
                  Contact me
                </Button>
              </div>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(contactStyle)(SectionContact)
