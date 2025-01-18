import React from 'react'
import { makeStyles } from '@mui/styles';

import Footer from './Footer'
import TopBar from './TopBar/TopBar'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
  },
  childHeight: {
    minHeight: '410px',
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.childHeight}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
