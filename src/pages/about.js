import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <div style={{
            textAlign: `center`,
        }}>

            <h1>
                <b>Paulo Black</b>
            </h1>
            <p>
                I'm Paulo and I use this domain and the infra around it primarily for sandboxing and testing out new approaches to DevOps and database tooling, none of which
                is exposed here other than what I may write about. I sometimes also write about my professional and personal interests including software engineering, engineering
                management, powerlifting, running, gardening, and literature.
            </p>

        </div>
        
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
