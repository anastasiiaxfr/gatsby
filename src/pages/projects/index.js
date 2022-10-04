import React from 'react'
import Layout from "../../components/Layout"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'


function Prodject({ data }) {
    console.log(data)
    const projects = data.projects.nodes
  return (
    <Layout>
 <div>Prodject</div>

    <div>
        { projects.map(project => (
            <Link to = {"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                <Img style={{width: 300}} fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                    <h3>
                        {project.frontmatter.title}
                    </h3>
                    <p>
                        {project.frontmatter.stack}
                    </p>
                </div>
            </Link>
        )) }
    </div>

    </Layout>
   
  )
}

export default Prodject

export const query = graphql`
query ProjectsPage {
   projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
  `