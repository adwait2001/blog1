import React from 'react'
import { Link } from 'gatsby'
import {Image,Row} from 'react-bootstrap'
import Header from "../components/header"
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div className="parallax">
        <Head title="About"/>
        <Header/>
        <div className="container-5">
        <h1>HEY I'M SAM WILSON</h1>
        <h3>A Full Stack Web Developer</h3>
        </div>
        <div class='container container-2'>
        <h1 className="magnify-2">PROJECTS</h1>
        <Row className="margin-in">
            <div className="col-sm-5 cards-1">
             <h3 className="center">Made an Chat application using socket programming</h3>
            </div>
            <div className="col-sm-5 cards-2">
             <h3 className="center">Making an blog App using Gatsby.js</h3>
            </div>
        </Row>
        <Row className="margin-in">
            <div className="col-sm-5 cards-3">
             <h3 className="center">Making an Wordpress CMS</h3>
            </div>
            <div className="col-sm-5 cards-4">
             <h3  className="center">Made a realtime Cards Simulatio system</h3>
            </div>
            </Row>
        </div>
        <div className="container">

        </div>
        <div>

        </div>
    
        </div>
    )
}

export default AboutPage