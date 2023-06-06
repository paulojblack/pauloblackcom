import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
 
    return (
        <Layout>
            <SEO 
                title={frontmatter.title}
                content="article"
            />
            <h2 className="lead">{frontmatter.title}</h2>
            <h4 className="quiet">{frontmatter.date}</h4>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    )

}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`