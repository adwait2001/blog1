import React from 'react'
import Header from '../components/header'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head'


export const query = graphql`
query($slug:String){
  contentfulBlogPost(slug:{eq: $slug}){
    title
    publishedDate(fromNow:true)
    body{
      json
    }
  }
}
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <div className="parallax">
      <Header />
      <div className='container'>
        <Head title={props.data.contentfulBlogPost.title} />

        <h1 className="magnify-1">{props.data.contentfulBlogPost.title}</h1>
        <h5 className="magnify-3">{props.data.contentfulBlogPost.publishedDate}</h5>
        <div className="container styling">
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </div>
      </div>
    </div>
  )
}
export default Blog;