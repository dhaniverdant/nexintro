/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Layout from 'components/Layout';
import getSortedPostsData from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// const Index = ({ stars }) => (
//   <Layout>
//     <div>
//       <h1 className={styles.title}>Welcome to Next.js</h1>
//       <div>Next stars is : {stars}</div>
//     </div>
//   </Layout>
// );

// Index.getInitialProps = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const json = await res.json();
//   return { stars: json.owner.id };
// };

// export default Index;
