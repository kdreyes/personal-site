import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Endeavors/Cell';
import data from '../data/blog';

const Blog = () => (
  <Main
    title="Blog"
    description="Read Katrina's blog posts, found on Medium."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>All of my blog posts on Medium</p>
        </div>
      </header>
      {data.map((blog) => (
        <Cell
          data={blog}
          key={blog.title}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
