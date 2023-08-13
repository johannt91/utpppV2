import React from "react"
import {
  modal,
  modalHeader,
  modalBtn,
  modalImage,
  modalHeading,
  modalBio,
} from "../assets/styles/Modal.module.css"
import { getFullName } from "../utils/getFullName"
import { CgClose } from "react-icons/cg"
import { GatsbyImage } from "gatsby-plugin-image"

const Modal = ({ onClose, name, image }) => {
  console.log(onClose)

  return (
    <aside className={modal}>
      <div className={modalHeader}>
        <div className={modalHeading}>
          <GatsbyImage
            className={modalImage}
            alt=""
            image={image.childImageSharp.gatsbyImageData}
          />
          <div>
            <h3>{getFullName(name)}</h3>
            <p>B. Mus., MMus., A.R.C.T</p>
          </div>
        </div>

        <button className={modalBtn} onClick={onClose}>
          <CgClose />
        </button>
      </div>

      <div className={modalBio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus
          tellus, cursus in dolor ac, convallis mattis nunc. Etiam varius, enim
          vel porta dictum, ex eros semper orci, vulputate volutpat leo erat
          iaculis tellus. Etiam pharetra eget libero vitae lacinia. Pellentesque
          in felis feugiat, elementum felis sed, aliquet orci. Duis id feugiat
          nibh. Nunc pharetra non massa a rhoncus. Donec bibendum finibus magna,
          eget sagittis turpis. Curabitur pellentesque placerat nunc, at
          bibendum nunc. Morbi non tortor ultricies, vestibulum dolor sit amet,
          condimentum ligula. Vivamus laoreet convallis metus, nec venenatis
          urna convallis et. Nullam congue quam eu lectus bibendum, quis
          tincidunt est semper. Etiam id sapien non felis auctor ultrices sit
          amet vitae enim. Vestibulum ac diam aliquet, elementum nunc a, blandit
          enim. Sed sit amet mattis ligula, in tempus nisl.
        </p>
        <p>
          Mauris lorem leo, pellentesque et nisl sed, fringilla ultricies lacus.
          Aenean viverra tincidunt metus, quis pulvinar metus tempor ut. Nunc
          volutpat egestas tortor, ut consectetur velit semper nec. Etiam sit
          amet lectus nisl. Cras et tincidunt nulla. Proin eu felis tortor. In
          eget lorem mi.
        </p>
      </div>
    </aside>
  )
}

export default Modal
