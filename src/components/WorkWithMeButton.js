import React from 'react'
import { Link } from 'gatsby'

const WorkWithMeButton = props => (
  <section id="two">
    <div className="inner">
      <header className="major">
        <h2>Ready to take your next step?</h2>
      </header>
      <ul className="actions">
        <li>
          <Link to="/work-with-me" className="button next">
            Work with me!
          </Link>
        </li>
      </ul>
    </div>
  </section>
)

export default WorkWithMeButton
