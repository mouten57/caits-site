import {
  title,
  whiteColor,
  blackColor,
  hexToRgb,
} from '../material-kit-pro-react.jsx'

const errorPageStyles = {
  contentCenter: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    zIndex: '3',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    color: whiteColor,
    padding: '0 15px',
    width: '90%',
    maxWidth: '880px',
  },
  title: {
    ...title,
    fontSize: '13vw',
    color: whiteColor,
    letterSpacing: '10px',
    maxWidth: '100%',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '2.25rem',
    marginTop: '0',
    marginBottom: '8px',
  },
  link: {
    color: whiteColor,
    textDecoration: 'underline',
    fontWeight: '500',
    '&,& *,& *:hover,& *:focus': {
      color: 'inherit !important',
    },
  },
  description: {
    fontSize: '19.5px',
    letterSpacing: '1px',
    position: 'fixed',
    bottom: '20%',
    width: 'auto',
    left: '0',
  },
  pageHeader: {
    minHeight: '100vh',
    height: 'auto',
    display: 'inherit',
    position: 'relative',
    margin: '0',
    padding: '0',
    border: '0',
    alignItems: 'center',
    '&:before': {
      background: 'rgba(' + hexToRgb(blackColor) + ', 0.5)',
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""',
    },
  },
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  left: {
    float: 'left!important',
    display: 'block',
    '&,& *,& *:hover,& *:focus': {
      color: 'inherit !important',
    },
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right',
    '&,& *,& *:hover,& *:focus': {
      color: 'inherit !important',
    },
  },
  icon: {
    width: '18px',
    height: '18px',
    top: '3px',
    position: 'relative',
  },
}

export default errorPageStyles
