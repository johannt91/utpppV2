import React from "react"
import * as Main from "../assets/styles/Home.module.css"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import { BsChevronDown } from "react-icons/bs"

export default function Home() {
  const scroll = () => {
    const section = document.querySelector("#degrees")
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout>
      <main>
        <section className={Main.hero}>
          <div className={Main.cta}>
            <h3 className={Main.headline}>
              TEACHING THE NEXT GENERATION OF MUSICIANS
            </h3>
            <a
              className={Main.button}
              href="https://music.utoronto.ca/applying-auditions.php"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </div>
          <div onClick={scroll}>
            <p className={Main.offer}>See what we have to offer</p>
            <BsChevronDown className={Main.chevron} />
          </div>
        </section>

        {/* <section className={Main.about} id="about">
          <div className={Main.about__container}>
            <h2 className={Main.heading}>Our Philosophy</h2>
            <p className={Main.description}>
              Piano Pedagogy at the University of Toronto is an innovative
              program, which combines the strengths of the Piano Performance
              department, the Music Education research area, and the new
              Pedagogy seminar and teaching practicum offerings.
            </p>
          </div>
        </section> */}

        <section className={Main.degrees} id="degrees">
          <h2>DEGREES</h2>
          <div className={Main.programs}>
            <div className={Main.program}>
              <StaticImage
                className={Main.masterPiano}
                src="../assets/images/bwpiano.jpg"
                alt="Hands playing piano"
              />
              <h3 className={Main.program__title}>MASTER OF MUSIC</h3>
              <h4 className={Main.program__subtitle}>
                In Piano Performance &amp; Pedagogy
              </h4>
              <p className={Main.program__description}>
                The MMus in Piano Pedagogy at the University of Toronto is an
                innovative program, which combines the strengths of the Piano
                Performance department, the Music Education research area, and
                the new Pedagogy seminar and teaching practicum offerings.
              </p>
              <a
                className={Main.program__link}
                href="https://music.utoronto.ca/applying-auditions.php"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <span>&#8594;</span>
              </a>
            </div>
            <div className={Main.program}>
              <StaticImage
                className={Main.doctorPiano}
                src="../assets/images/scorehand.jpg"
                alt="Hand touching music sheet"
              />
              <h3 className={Main.program__title}>Doctor of Musical Arts</h3>
              <h4 className={Main.program__subtitle}>
                In Piano Performance &amp; Pedagogy
              </h4>
              <p className={Main.program__description}>
                The DMA in Piano Performance &amp; Pedagogy at the University of
                Toronto is an advanced pre-professional degree that combines
                performance, applied teaching, and research in pedagogy and
                androgogy.
              </p>
              <a
                className={Main.program__link}
                href="https://music.utoronto.ca/applying-auditions.php"
                target="_blank"
                rel="noreferrer"
              >
                Learn more <span>&#8594;</span>
              </a>
            </div>
          </div>
        </section>

        <section>
          <iframe
            className={Main.video__player}
            src={
              "https://player.vimeo.com/video/350799297?h=667ed0ea4f&title=0&byline=0&portrait=0"
            }
            title="Midori Koga's Teaching studio"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </Layout>
  )
}
