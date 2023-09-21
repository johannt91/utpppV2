import * as React from "react"
import Layout from "../components/Layout"
import {
  container,
  content,
  experiences,
  title,
  programTitle,
  experienceList,
  programDescription,
  experiencesTitle,
  linkStyle,
  separator
} from "../assets/styles/Degrees.module.css"

const Degrees = () => {
  return (
    <Layout>
      <section className={container}>
        <h1 className={title}>Degree Programs</h1>
        <div className={content}>
          <h3 className={programTitle}>Master of Music (MMus)</h3>
          <p className={programDescription}>
            The MMus in Piano Performance &amp; Pedagogy at the University of
            Toronto is an innovative EXPERIENTIAL program which combines piano
            performance with pedagogy seminars, research projects and teaching
            practica. The master's graduate offers two tracks: Performance
            emphasis or Research.
          </p>
        </div>
        <div className={experiences}>
          <p className={experiencesTitle}>
            Practical teaching experiences embedded in coursework include:
          </p>
          <div className={experienceList}>
            <p>
              Upper Intermediate and advanced level private teaching of amateur
              adults.
            </p>
            <span className={separator}></span>
            <p>
              Advanced level master-classes at the University of Toronto Faculty
              of Music, local arts high schools, and community music schools.
            </p>
            <span className={separator}></span>
            <p>
              Participation in the “Practice Partners” program with Dixon Hall
              Neighbourhood Schools.
            </p>
            <span className={separator}></span>
            <p>
              Adjudication and assessment experience through UofT sponsored
              music festivals
            </p>
            <span className={separator}></span>
            <p>
              Teaching children's group classes and applied private lessons from
              beginning to upper intermediate levels.
            </p>
          </div>

          <a href="#" className={linkStyle}>
            MMus Piano Performance and Pedagogy
          </a>
        </div>
      </section>

      {/* DOCTOR OF MUSICAL ARTS */}
      <section className={container}>
        <div className={content}>
          <h3 className={programTitle}>Doctor of Musical Arts (DMA)</h3>
          <p className={programDescription}>
            The DMA in Piano Performance &amp; Pedagogy at the University of
            Toronto is an advanced pre-professional degree that combines
            performance, applied and masterclass teaching experiences, course
            teaching opportunities and research in pedagogy and androgogy.
          </p>
        </div>
        <div className={experiences}>
          <p className={experiencesTitle}>
            Graduate Student Teaching Assistantships (GSTA) available in:
          </p>
          <div className={experienceList}>
            <p>
              Upper Intermediate and advanced level private teaching of amateur
              adults.
            </p>
            <span className={separator}></span>
            <p>
              Applied Lessons and Masterclass Teaching: advanced and university
              level studio teaching and masterclasses through the Engineering
              Music Minor Program (PMU299Y)
            </p>
            <span className={separator}></span>
            <p>
              Course Teaching and Grading: Undergraduate piano pedagogy course
              grading, tutorials, mini-lectures (PMU260H)
            </p>
            <span className={separator}></span>
            <p>
              Collaborative piano positions in vocal and instrumental classes
            </p>
            <span className={separator}></span>
            <p>
              Teaching: UofT Piano Pedagogy Program (UTPPP) children's group
              classes and private lessons
            </p>
          </div>
          <a href="#" className={linkStyle}>
            DMA Piano Performance and Pedagogy
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Degrees
