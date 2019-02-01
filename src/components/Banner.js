import React from 'react'
import './Banner.css'
import logo from '../assets/images/website-icon.png'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major header">
        <h1>Caitlin May Consulting</h1>
      </header>
      <div className="content index">
        <p>The Career Corner</p>
        <p />
        <ul className="actions">
          <li>
            {/* <a href="#one" className="button next scrolly see-more">
              See More
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
