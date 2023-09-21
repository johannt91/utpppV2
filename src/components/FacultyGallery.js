import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getFullName } from "../utils/getFullName"

const facultyImgs = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "faculty" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 400)
        }
      }
    }
  }
`

const FacultyGallery = () => {
  const data = useStaticQuery(facultyImgs)
  const nodes = data.allFile.nodes

  return nodes.map((image, index) => {
    const { name } = image
    return (
      <div key={index}>
          <section>
            <GatsbyImage alt="" image={image.childImageSharp.gatsbyImageData} />
            <h3>{getFullName(name)}</h3>
          </section>
      </div>
    )
  })
}

export default FacultyGallery
