import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor,
} from '../../material-kit-pro-react.jsx'

const teamStyle = {
  mrAuto,
  mlAuto,
  title,
  description: {
    ...description,
    marginBottom: '20px',
    fontSize: '20px',
    padding: '10px',
    lineHeight: '1.1',
  },
  cardTitle,

  cardDescription: {
    '@media (max-width: 600px)': {
      fontSize: '14px',
    },
    fontSize: '20px',
    color: grayColor[0],
    padding: '10px',
    lineHeight: '1.1',
  },
  team: {
    padding: '20px 0px',
  },
  textCenter: {
    textAlign: 'center!important',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  textMuted: {
    color: grayColor[7] + ' !important',
  },
  justifyContent: {
    justifyContent: 'center!important',
  },
}

export default teamStyle
