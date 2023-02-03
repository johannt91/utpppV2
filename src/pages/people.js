import * as React from 'React';
import * as Style from '../assets/styles/people.module.css';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const People = () => {
  return (
    <Layout>
      <main>
        <h1 className={Style.header}>People</h1>
        <section className={Style.faculty}>
          <div className={Style.faculty__card}>
            <div className={Style.faculty__profile}>
              <StaticImage className={Style.faculty__image} src='../assets/images/people/midori.jpg' alt='Side profile of pianist, founder, and Associate Professor Midori Koga.'/>
              <div className={Style.faculty__name}>
                <h3>Midori Koga <span>(Founder)</span></h3>
                <p className={Style.faculty__bio}>bio <span>&#8594;</span> </p>
              </div>
            </div>
          </div>
          <div className={Style.faculty__card}>
            <div className={Style.faculty__profile}>
              <StaticImage className={Style.faculty__image} src='../assets/images/people/charles.jpg' alt='Side profile of pianist, founder, and Associate Professor Midori Koga.'/>
              <div className={Style.faculty__name}>
                <h3>Charles Lin <span>(Director)</span></h3>
                <p className={Style.faculty__bio}>bio <span>&#8594;</span> </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default People
