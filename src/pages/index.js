import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const pageLinks = [
  { text: "Home", url: "/" },
  { text: "Blog", url: "blog" },
  { text: "About", url: "about" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  return (
    <Layout>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <p className={styles.blogLinkRow}>
              <a
                className={styles.listItemfrontmatter}
                href={`${frontmatter.slug}${utmParameters}`}
              >
                {frontmatter.title}
              </a>
              <span className={styles.listItemDescription}>{frontmatter.date}</span>
            </p>
          )
        })}
      </div>
    </Layout>
  )
}

export const stories = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
