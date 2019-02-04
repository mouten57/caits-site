import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Caitlin Outen</title>
          <meta
            name="google-site-verification"
            content="oH5ZbBJcgJ_DX1T0C9fcZmFzWM3AtZICwguJtV1iuSQ"
          />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Resumes</h3>
                <p>Revitalize your resume and get noticed!</p>
              </header>
              <Link to="/resumes" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Cover Letters</h3>
                <p>Is your cover letter killing your job search?</p>
              </header>
              <Link to="/cover-letters" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Interview Coaching</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/interview-coaching" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Targeted Job Searches</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/job-search" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Company Research</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/company-research" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Executive Biographies</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/executive-biographies" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>More Stuff/ maybe One customer review?</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/success-stories" className="button next">
                    more testimonials...
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
