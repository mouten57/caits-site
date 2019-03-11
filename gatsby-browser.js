import ReactDOM from 'react-dom'
import './src/assets/scss/material-kit-pro-react.scss?v=1.3.0'

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback)
