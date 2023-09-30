import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getFullName } from "../utils/getFullName"

import {
  imageLabel,
  imageName,
  imageBtn,
  rightArrow,
  imageStrip,
  imageContainer
} from "../assets/styles/Gallery.module.css"

import Modal from "./Modal"
import { BsArrowRight } from "react-icons/bs"

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

  const [modalOpen, setModalOpen] = useState(null)
  const toggleModal = name => {
    setModalOpen(name)
  }

  return nodes.map((image, index) => {
    const { name } = image
    const role = "faculty"

    return (
      <div className={imageContainer} key={index}>
        <GatsbyImage alt="" image={image.childImageSharp.gatsbyImageData} />
        <div className={imageLabel}>
          <h3 className={imageName}>{getFullName(name, role)}</h3>
          <div className={imageStrip}>
            <button className={imageBtn} onClick={() => toggleModal(name)}>
              bio
            </button>
            <BsArrowRight className={rightArrow} />
          </div>
        </div>
        {modalOpen === name && (
          <Modal onClose={() => setModalOpen(null)} name={name} image={image}/>
        )}
      </div>
    )
  })
}

export default FacultyGallery
