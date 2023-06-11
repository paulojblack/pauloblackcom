/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

// import { React, useEffect } from "react"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.goodreads.com/review/custom_widget/45979099.Currently%20Reading?cover_position=left&cover_size=small&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=1&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1686392425&widget_text_color=000000&widget_title_size=medium&widget_width=medium";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
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
      </div>
    </>
  )
}

export default Layout
