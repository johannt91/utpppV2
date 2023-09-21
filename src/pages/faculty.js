import React from "react"
import FacultyGallery from "../components/FacultyGallery"
import Layout from "../components/Layout"
import {header, imgContainer} from "../assets/styles/Staff.module.css"

const faculty = () => {
  return (
    <Layout>
      <h1 className={header}>Faculty</h1>
      <section className={imgContainer}>
        <FacultyGallery />
      </section>
    </Layout>
  )
}

export default faculty
