import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Brand Assistant</title>
        <meta property="og:title" content="Forward Brand Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
