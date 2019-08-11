import React from 'react'
import axios from 'axios'
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
import Form from './SignUpForm'

import modalStyle from '../../assets/jss/modalStyle.jsx'
import logo from '../../assets/img/website-icon.png'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

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
  componentDidMount() {
    //sessionStorage.clear()
    let visited = sessionStorage['alreadyVisited']
    if (visited) {
      sessionStorage.setItem('alreadyVisited', true)
      this.setState({ modal: false })
      //do not view Popup
    } else {
      //this is the first time
      sessionStorage.setItem('alreadyVisited', true)
      this.setState({ modal: true })
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
            <GridContainer>
              <GridItem xs={12}>
                <h5>
                  Would you like to signup to receive all the most exciting news
                  from Caitlin May Consulting?
                </h5>
              </GridItem>
              {/* <GridItem xs={6}>
                <img src={logo} style={{ width: '100%' }} />
              </GridItem> */}
            </GridContainer>
            <form
              action="https://caitlinmayconsulting.us20.list-manage.com/subscribe/post"
              method="POST"
              encType="multipart/form-data"
              data-dojo-attach-point="formNode"
              noValidate
            >
              <input type="hidden" name="u" value="b64b0ed614b2044e686a801dc" />
              <input type="hidden" name="id" value="b430f08be6" />
              <GridContainer>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Your Email"
                    inputProps={{
                      type: 'text',
                      name: 'EMAIL',
                      id: 'mc-EMAIL',

                      value: email,

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
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(modalStyle)(Modal)
