import React from 'react'
import Layout from '../components/layout'
import withRoot from '../withRoot'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default withRoot(NotFoundPage)
