import * as React from 'React';
import * as Style from '../assets/styles/people.module.css';
import Layout from '../components/Layout';

const People = () => {
  return (
    <Layout>
      <section className={Style.container}>
        <h1 className={Style.header}>People</h1>
      </section>
    </Layout>
  )
}

export default People
