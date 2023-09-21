import * as React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import {header, imgContainer} from "../assets/styles/Staff.module.css"

const Teachers = () => {
  return (
    <Layout>
        <h1 className={header}>Teachers</h1>
        <section className={imgContainer}>
          <Gallery />
        </section>
    </Layout>
  )
}

export default Teachers
