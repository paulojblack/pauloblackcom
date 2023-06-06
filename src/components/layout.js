/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import * as styles from "../components/index.module.css"

const pageLinks = [
  { text: "Home", url: "/" },
  { text: "Blog", url: "blog" },
  { text: "About", url: "about" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Paulo Black
        </footer>
      </div>
    </>
  )
}

export default Layout
