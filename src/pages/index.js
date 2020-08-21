import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Image ,Row} from 'react-bootstrap'
import Head from '../components/head'
import personal1 from '../personal1.jpg'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
           <div className="container container-1">
            <Row>
            <div className=" col-sm-7 margin">
                <h1 className="magnify">About the Author</h1>
                <h4>Full stack Web Developer</h4>
                <h7 className="adjust">Graduated from Madras Institute of information Technology <br/>
                Loves writing about new web-techs <br/>
                Proficient in Javascript loves writing articles on<br/>
                 react-js,node-js,gatsby-js</h7>
            </div>
            <div className= "col-sm-3 margin-1 image-adjust">
            <Image src={personal1} roundedCircle/>
            </div>
           </Row>
           </div>
        </Layout>
    )
}

export default IndexPage