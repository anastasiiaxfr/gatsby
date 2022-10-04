import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <h1> main </h1>
    <Img style={{ width: 300 }} fluid={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const quey = graphql`
query Banner {
  file(relativePath: {eq: "icon.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`