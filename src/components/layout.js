import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import { rhythm, scale } from "../utils/typography"


const GlobalStyle = createGlobalStyle`
  body {
    color: green;
    background-color: #4a4a4a;
    
    
  }
`;


// const Layout = ({ children, location }) => {
//   return (
//         <div >
//           <SkipToContent href="#content">Skip to Content</SkipToContent>
//             <StyledContent>
//               <div id="content">
//                 {children}
//               </div>
//               <Link to="/contact/">Get In Touch </Link>
//             </StyledContent>
        
//         </div>
  
//   );
// };

// export default Layout;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <GlobalStyle  />
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
       
        <Footer>
          © {new Date().getFullYear()}, Designed & Build by Pedro Cuji 
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
