import React from 'react'
import Layout from '../../components/layout'
//import withStyles from '@material-ui/core/styles/withStyles'
import withRoot from '../../withRoot'
import WorkWithMePage from '../../views/WorkWithMePage/WorkWithMePage'

const WorkWithMe = () => {
  return (
    <Layout>
      <WorkWithMePage />
    </Layout>
  )
}

export default withRoot(WorkWithMe)
