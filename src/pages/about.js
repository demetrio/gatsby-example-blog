import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>Hi! Nice to meet you!</p>
    <p>
      The design, the music are my two passions! I try to always be well
      informed of the latest news about them.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
