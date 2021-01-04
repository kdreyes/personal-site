import React from 'react';
import { Link } from 'react-router-dom';
// import {Helmet} from 'react-helmet';

import Main from '../layouts/Main';

// import Cell from '../components/Endeavors/Cell';
// import data from '../data/endeavors';

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
      <p>Visit <a href="https://medium.com/@katrina.mdelosreyes">my Medium feed</a> here.</p>
      {/* <div id="medium-widget">
        <Helmet>
          {
          <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
          <script>MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@katrina.mdelosreyes","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})</script>
          }
         </Helmet>
      </div> */}
    </article>
  </Main>
);

export default Blog;
