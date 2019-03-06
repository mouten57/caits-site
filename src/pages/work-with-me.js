import React from 'react'
import Layout from '../components/layout'
import workWithMe from '../assets/img/work-with-me.png'

const WorkWithMe = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">Work With Me Page</div>
        <img src={workWithMe} />
      </section>
    </div>
  </Layout>
)

export default WorkWithMe
