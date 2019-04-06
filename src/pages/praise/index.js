import React from 'react'
import Layout from '../../components/layout'
import Testimonials from '../../views/Testimonials/Testimonials'
import withRoot from '../../withRoot'

const Praise = () => (
  <Layout>
    <Testimonials />
  </Layout>
)

export default withRoot(Praise)
