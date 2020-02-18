import React from 'react';
import { Link } from 'gatsby';
import Layout from './components/layout';

export default () => (
  <Layout>
    <h1>Hello!</h1>
    <p>I hope you had a nice day</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
