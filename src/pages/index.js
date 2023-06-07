import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  return (
    <Layout>
      <div className={styles.introContainer}>

        <h1>
          <b>Paulo Black</b>
        </h1>
        <p>Hey! I'm Paulo and I use this domain and the infra around it primarily for sandboxing and testing out new approaches to DevOps and database tooling, none of which
          is exposed here other than what I may write about. I sometimes also write about my professional and personal interests including software engineering, engineering
          management, powerlifting, strongman, running, gardening, and literature.</p>

      </div>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <p className={styles.blogLinkRow}>
              <a
                className={styles.listItemfrontmatter}
                href={`${frontmatter.slug}`}
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
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
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
