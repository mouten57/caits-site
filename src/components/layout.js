import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import config from '../../data/Siteconfig'

import Button from './CustomButtons/Button'
import Head from './Head'
import Header from './Header/Header.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Footer from './Footer/Footer.jsx'
import GridContainer from './Grid/GridContainer'
import GridItem from './Grid/GridItem'
import Parallax from './Parallax/Parallax'

import contactUsStyle from '../assets/jss/views/contactUsStyle.jsx'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import logo from '../assets/img/website-icon.png'

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
                  <div
                    className="LI-profile-badge"
                    data-version="v1"
                    data-size="medium"
                    data-locale="en_US"
                    data-type="profinder"
                    data-theme="light"
                    data-vanity="caitlinouten"
                    style={{
                      width: '60%',
                      margin: '0 auto',
                      maxWidth: '550px',
                      minWidth: '200px',
                    }}
                    data-rendered="true"
                    data-uid="294378"
                  >
                    <div>
                      <script
                        type="text/javascript"
                        src="https://static.licdn.com/sc/h/3qk7aqkysw7gz575y2ma1e5ky"
                      />
                      <code id="__pageContext__" style={{ display: 'none' }} />

                      <script src="https://static.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.92/f/%2Fbadger-frontend%2Fsc-hashes%2Fsc-hashes_en_US.js" />
                      <script src="https://static.licdn.com/sc/h/19dd5wwuyhbk7uttxpuelttdg" />

                      <div
                        dir="ltr"
                        className="LI-badge-container profinder light"
                        style={{ display: 'none' }}
                      >
                        {' '}
                        <div className="LI-badge-container-profinder-profile">
                          <div className="LI-badge-profinder-header">
                            <div className="LI-profinder-banner">
                              <a
                                href="https://www.linkedin.com/profinder?trk=provider-badge"
                                className="LI-banner-link"
                                target="_top"
                              >
                                <img
                                  className="LI-profinder-logo"
                                  src="https://static.licdn.com/sc/h/8r0c5jw7h3b5n3d6232268pvn"
                                  alt="LinkedIn ProFinder"
                                />
                              </a>
                            </div>
                            <div className="LI-name-container">
                              <a
                                href="https://www.linkedin.com/profinder/pro/caitlinouten?trk=provider-badge"
                                className="LI-entity-link"
                                target="_top"
                              >
                                <div className="LI-col">
                                  <div className="LI-profile-pic-container">
                                    <img
                                      src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png"
                                      className="LI-profile-pic"
                                      alt="Caitlin Outen"
                                      width="200"
                                      height="200"
                                    />
                                  </div>
                                </div>
                                <div className="LI-col LI-header">
                                  <div className="LI-name">Caitlin Outen</div>
                                  <div className="LI-title">
                                    12 recommendations
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <ul className="LI-more-info">
                            <li className="LI-profinder-service">
                              <a
                                href="https://www.linkedin.com/profinder/project/interview-coach?providerUrls=caitlinouten&amp;trk=provider-badge"
                                target="_top"
                              >
                                Interview Coach
                              </a>
                            </li>
                            <li className="LI-profinder-service">
                              <a
                                href="https://www.linkedin.com/profinder/project/resume-writing?providerUrls=caitlinouten&amp;trk=provider-badge"
                                target="_top"
                              >
                                Resume Writing
                              </a>
                            </li>
                          </ul>
                          <div className="LI-footer LI-row">
                            <a
                              href="https://www.linkedin.com/profinder/pro/caitlinouten?trk=provider-badge#hire"
                              className="LI-profinder-cta"
                              target="_top"
                            >
                              Hire Caitlin on ProFinder
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.left}>
                    <List className={classes.list}>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.linkedin.com/in/caitlinouten/"
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
                          <i className="fab fa-2x fa-instagram" />
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
