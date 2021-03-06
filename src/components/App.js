import React from 'react'
import { Announcement, Footer, Header, Newsletter } from './lib'
import SEO from './SEO.js'

import '../css/app.scss'

export default (props) => {
  const { children, title, description } = props

  return (
    <div className="main">
      <Header />
      <SEO title={title} description={description} />
      <Announcement>
        tBTC will launch on April 27th, 2020. Read more in <a href="https://www.bloomberg.com/news/articles/2020-04-02/bitcoin-s-ethereum-rivalry-could-be-assuaged-with-tbtc-bridge" target="_blank" rel="noopener noreferrer">Bloomberg</a>.
      </Announcement>
      <div className="app">
        { children }
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
