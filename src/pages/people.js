import * as React from "react"
import * as Style from "../assets/styles/People.module.css"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"

const People = () => {
  return (
    <Layout>
      <main>
        <h1 className={Style.header}>People</h1>
        <section className={Style.faculty}>
          <Gallery />
        </section>
      </main>
    </Layout>
  )
}

export default People
