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
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

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
          padding: `var(--size-gutter)`,
        }}
      >
        <div className={styles.introContainer}>

          <h1>
            <b>Paulo's site</b>
          </h1>
          <p>Hey! I'm Paulo and I use this domain and the infra around it primarily for sandboxing and testing out new approaches to DevOps and database tooling, none of which
            is exposed here other than what I may write about. I sometimes also write about my professional and personal interests including software engineering, engineering
            management, powerlifting and strongman, running, gardening, literature and a few other topics. I'm always up for chatting about any of those topics, so drop a line if you want!</p>
          <span className={styles.intro}>


            {pageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== pageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))}

            <React.Fragment>
              <> · </>
              <a href="https://github.com/paulojblack" target="_blank">Github</a>
              <> · </>
              <a href="https://www.linkedin.com/in/paulo-black-0a131794/" target="_blank">LinkedIn</a>
            </React.Fragment>

          </span>
        </div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Paulo Black
        </footer>
      </div>
    </>
  )
}

export default Layout
