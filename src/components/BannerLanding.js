import React from 'react'
import './BannerLanding.css'

const BannerLanding = props => (
  <section id="banner" className={`style2 ${props.class}`}>
    <div className="inner">
      <header className="major">
        <h1>{props.headerName}</h1>
      </header>
      <div className="content">
        <p>
          {props.p1}
          <br />
          {props.p2}
        </p>
      </div>
    </div>
  </section>
)

export default BannerLanding
