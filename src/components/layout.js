import React from 'react'
import '../styles/style.css'

import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
        <div className='img container-fluid'>
        <Header />
        <h1 className="tagline">WELCOME TO MY BLOG <br/> Accompany Us To An Amazing Journey</h1>
        </div>
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout