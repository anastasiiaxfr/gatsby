import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (  
    <Layout>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>
        <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ProjectDetails


export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`