import React from 'react';

import Layout from 'components/Layout';
import styles from 'sass/Index.module.scss';

const Index = ({ stars }) => (
  <Layout>
    <div>
      <h1 className={styles.title}>Welcome to Next.js</h1>
      <div>
        Next stars:
        {stars}
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Index;
