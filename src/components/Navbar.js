import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'




function Navbar() {

  const data = useStaticQuery(graphql`
  query SiteInfo {
    
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    
  }
`)
const { title } = data.site.siteMetadata

  return (
    <nav>
    <h1>{title}</h1>
        <Link to="/">Home</Link>
        <Link to="/about/">Abput</Link>
        <Link to="/projects/">Projects</Link>
    </nav>
  )
}

export default Navbar