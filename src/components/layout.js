import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import config from '../../data/Siteconfig'

import Head from './Head'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

import contactUsStyle from '../assets/jss/views/contactUsStyle.jsx'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const Layout = ({ children, location, classes }) => {
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
          <Header />
          {content}
          <Footer
            theme="white"
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.twitter.com/cakedinbutter"
                        className={(classes.icon, classes.block)}
                      >
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.instagram.com/cakedinbutter"
                        className={(classes.icon, classes.block)}
                      >
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </ListItem>
                    {/* <ListItem className={classes.inlineBlock}>
                      <a
                        href="//blog.creative-tim.com/"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/license"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem> */}
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} by{' '}
                  <a href="https://www.creative-tim.com">Matt Outen</a>
                </div>
              </div>
            }
          />
        </>
      )}
    />
  )
}

export default withStyles(contactUsStyle)(Layout)
