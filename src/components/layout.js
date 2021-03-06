import React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import config from '../../data/Siteconfig'

// import Button from './CustomButtons/Button'
import Head from './Head'
import Header from './Header/Header.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Footer from './Footer/Footer.jsx'
// import GridContainer from './Grid/GridContainer'
// import GridItem from './Grid/GridItem'
// import Parallax from './Parallax/Parallax'

import contactUsStyle from '../assets/jss/views/contactUsStyle.jsx'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import logo from '../assets/img/website-icon.png'

import '../utils/linkedIn.css'
import '../assets/css/main.css'

class Layout extends React.Component {
  render() {
    let { children, location, classes, ...rest } = this.props
    let content

    if (location && location.pathname === '/') {
      content = <div id="index">{children}</div>
    } else {
      content = (
        <main className="content">
          <article id="page">
            <div className="entry-content">{children}</div>
          </article>
        </main>
      )
    }
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Head />
            <Header
              color="white"
              brand="Caitlin May Consulting"
              links={<HeaderLinks dropdownHoverColor="dark" />}
              fixed
              changeColorOnScroll={{
                height: 200,
                color: 'white',
              }}
              {...rest}
            />

            {content}
            <Footer
              theme="transparent"
              content={
                <div>
                  <div className={classes.left}>
                    <List className={classes.list}>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.linkedin.com/profinder/pro/caitlinouten?trk=provider-badge#hire"
                          className={(classes.icon, classes.block)}
                        >
                          <i className="fab fa-2x fa-linkedin" />
                        </a>
                      </ListItem>

                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.facebook.com/groups/1100616443453255/"
                          className={(classes.icon, classes.block)}
                        >
                          <i className="fab fa-2x fa-facebook" />
                        </a>
                      </ListItem>

                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://twitter.com/caitlinmayokc"
                          className={(classes.icon, classes.block)}
                        >
                          <i className="fab fa-2x fa-twitter" />
                        </a>
                      </ListItem>
                    </List>
                  </div>

                  <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} by{' '}
                    <a href="https://www.mattouten.com" className="footer-link">
                      Matt Outen
                    </a>
                  </div>
                </div>
              }
            />
          </>
        )}
      />
    )
  }
}

export default withStyles(contactUsStyle)(Layout)
