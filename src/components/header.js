import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      display: 'flex',
      padding: `var(--space-4) var(--size-gutter)`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <StaticImage
      alt="Big P"
      style={{ margin: 0 }}
      src="../images/favicon.png"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
    />
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
   
  </div>
)

export default Header
