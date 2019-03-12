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
    marginBottom: '40px',
  },
  cardTitle,
  cardDescription: {
    color: grayColor[0],
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
