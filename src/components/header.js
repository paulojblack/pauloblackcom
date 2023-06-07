import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const pageLinks = [
  { text: "Home", url: "/" },
  { text: "About", url: "about" },
]

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
    <Link to="/">
      <StaticImage
        alt="Big P"
        style={{ margin: 0 }}
        src="../images/icons/favicon.png"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
      />
    </Link>
   

    <div>
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
    </div>
 
  </div>
)

export default Header
