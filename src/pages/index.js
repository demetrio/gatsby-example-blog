import React from 'react';
import usePosts from '../hooks/use-posts';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';
import Hero from '../components/hero';
import Insta from './../components/insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>You know what they say...it's hard to keep things simple.</p>
        <ReadLink to="/about/">Learn about me &rarr;</ReadLink>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
