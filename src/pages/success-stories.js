import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Success Stories - Caitlin Outen</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      headerName="Success Stories"
      p1="I have many happy customers, see what they have to say "
      p2=""
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>I get stuff done.</h2>
          </header>
          <p>Brief description of stuff I do.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          {/* <Link to="/generic" className="image"> */}
          <div className="image">
            <img src={pic08} alt="" />
          </div>
          {/* </Link> */}
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Person One</h3>
              </header>
              <p>"Maybe a quote and pic?!"</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          {/* <Link to="/generic" className="image"> */}
          <div className="image">
            <img src={pic09} alt="" />
          </div>
          {/* </Link> */}
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Person Two</h3>
              </header>
              <p>"Maybe a quote and pic?!"</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          {/* <Link to="/generic" className="image"> */}
          <div className="image">
            <img src={pic10} alt="" />
          </div>
          {/* </Link> */}
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Person Three</h3>
              </header>
              <p>"Maybe a quote and pic?!"</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>So call me maybe</h3>
              </header>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
