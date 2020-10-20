import React from "react"
import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Social from "../components/social"
import  GlobalStyle  from '../styles/GlobalStyle';


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Life is a personal adventure"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./austin-distel-trading.jpg" alt="Gatsby Scene" />
        <GlobalStyle /> 
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my new website.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/contact/">Get In Touch </Link>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        
        <Social socialText ="follow me on twitter"/>
      </Layout>
    )
  }
}

export default IndexPage
