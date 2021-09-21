/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import Layout from 'components/Layout';
import styles from 'sass/Index.module.scss';

function Contact() {
  const [number, setNumber] = useState(0);

  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Contact Next.js</h1>
        <button type="button" onClick={() => setNumber(number + 1)}>
          Increase
        </button>
        <h4 className={styles.title}>click time(s) :{number}</h4>
        <button
          type="button"
          onClick={() => (number >= 1 ? setNumber(number - 1) : '')}
        >
          Decrease
        </button>
      </div>
    </Layout>
  );
}

export default Contact;
