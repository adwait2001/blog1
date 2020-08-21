import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Header from '../components/header'
import Head from '../components/head'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields:publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(fromNow:true)
        }
      }
    }
  }
    `)

  return (
    <div className="parallax">
      <Head title="blog"/>
      <Header/>
      <h1 className="magnify-1">Blog-Posts</h1>
      <div className="container boxx">
      <ol>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      </div>
    </div>
  )
}

export default BlogPage