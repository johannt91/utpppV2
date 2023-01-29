import React from 'react';
import * as Main from '../assets/styles/home.module.css';
import Layout from '../components/Layout';
import Piano from '../assets/images/bwpiano.jpg';
import Score from '../assets/images/scorehand.jpg';
import { BsChevronDown } from 'react-icons/bs'

export default function Home() {
  const scroll = () => {
    const section = document.querySelector("#about")
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout>
      <main>
        <section className={Main.hero}>
          <h1 className={`${Main.headline} ${Main.heading}`}>
            TEACHING THE NEXT GENERATION OF MUSICIANS
          </h1>
          <a
            className={Main.button}
            href="https://music.utoronto.ca/applying-auditions.php"
            target="_blank"
            rel="noreferrer"
          >
            Apply Now
          </a>
          <div onClick={scroll}>
            <p className={Main.offer}>See what we have to offer</p>
            <BsChevronDown className={Main.chevron} />
          </div>
        </section>

        <section className={Main.about} id="about">
          <div className={Main.about__container}>
            <h2 className={Main.heading}>Our Philosophy</h2>
            <p className={Main.description}>
              Piano Pedagogy at the University of Toronto is an innovative
              program, which combines the strengths of the Piano Performance
              department, the Music Education research area, and the new
              Pedagogy seminar and teaching practicum offerings.
            </p>
          </div>
        </section>
        
        <section className={Main.degrees}>
          <h2>DEGREES</h2>
          <div className={Main.programs}>
            <img className={Main.masterPiano} src={Piano}/>
            <img className={Main.doctorPiano} src={Score}/>
          </div>
        </section>
        
        <section>
          <iframe
            className={Main.video}
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
