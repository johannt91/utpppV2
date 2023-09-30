import React from "react"
import {
  modal,
  modalHeader,
  modalBtn,
  modalImage,
  modalHeading,
  modalTitle,
  modalContent,
} from "../assets/styles/Modal.module.css"
import { getFullName, getDegree } from "../utils/getFullName"
import { CgClose } from "react-icons/cg"
import { GatsbyImage } from "gatsby-plugin-image"
import { getBio } from "../utils/getBio"

const Modal = ({ onClose, name, image }) => {

  return (
    <aside className={modal}>
      <div className={modalHeader}>
        <div className={modalHeading}>
          <GatsbyImage
            className={modalImage}
            alt=""
            image={image.childImageSharp.gatsbyImageData}
          />
          <div className={modalTitle}>
            <h3>{getFullName(name)}</h3>
            <p>{getDegree(name)}</p>
          </div>
        </div>

        <button className={modalBtn} onClick={onClose}>
          <CgClose />
        </button>
      </div>

      <div className={modalContent}>
        <p>
          {getBio(name)}
        </p>
      </div>
    </aside>
  )
}

export default Modal
