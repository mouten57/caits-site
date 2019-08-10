import React from 'react'
import Mailchimp from 'react-mailchimp-form'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'

// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import Button from '../../components/CustomButtons/Button.jsx'
import CustomInput from '../../components/CustomInput/CustomInput'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

import modalStyle from '../../assets/jss/modalStyle.jsx'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})
const url =
  'https://caitlinmayconsulting.us20.list-manage.com/subscribe/post?u=b64b0ed614b2044e686a801dc&amp;id=b430f08be6'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true,
      formFields: {
        name: '',
        email: '',
        message: '',
      },
    }
  }
  handleClickOpen(modal) {
    var x = []
    x[modal] = true
    this.setState(x)
  }
  handleClose(modal) {
    var x = []
    x[modal] = false
    this.setState(x)
  }
  handleChange = e => {
    let formFields = { ...this.state.formFields }
    formFields[e.target.name] = e.target.value
    this.setState({
      formFields,
    })
  }
  render() {
    const { classes } = this.props
    const { name, email, message } = this.state
    return (
      <div>
        {/* <Button
          color="rose"
          round
          onClick={() => this.handleClickOpen('modal')}
        >
          Modal
        </Button> */}
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal,
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('modal')}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose('modal')}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Sign Up for CMC Newsletter</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <h5>
              Would you like to signup to receive all the most exciting news
              from Caitlin May Consulting?
            </h5>
            <Mailchimp
              action={url}
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true,
                },
              ]}
              messages={{
                sending: 'Sending...',
                success: 'Thank you for subscribing!',
                error: 'An unexpected error has occurred.',
                empty: 'You must write an e-mail.',
                duplicate: 'Too many subscribe attempts for this email address',
                button: 'Sign Me Up!',
              }}
            />

            {/* <form
              action="https://caitlinmayconsulting.us20.list-manage.com/subscribe/post?u=b64b0ed614b2044e686a801dc&id=b430f08be6"
              method="POST"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <GridContainer>
                <GridItem xs={12} />
                <GridItem xs={12}>
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

                <GridItem
                  xs={6}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button
                    color="success"
                    type="submit"
                    onClick={() => this.handleClose('modal')}
                    style={{ width: '100%' }}
                  >
                    SIGN ME UP!
                  </Button>
                </GridItem>
                <GridItem
                  xs={6}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button
                    onClick={() => this.handleClose('modal')}
                    style={{ width: '100%' }}
                  >
                    No Thanks
                  </Button>
                </GridItem>
              </GridContainer>
            </form> */}
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(modalStyle)(Modal)
