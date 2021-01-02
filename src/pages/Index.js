import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Katrina Delos Reyes' personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome!</Link></h2>
          <p>
            A one-stop-shop for all-things-Katrina thoughts, endeavors, and ideas.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        {/* <Link to="/blog">blog posts</Link>, {' '}
        <Link to="/endeavors">endeavors</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Visit &amp;TECH <a href="https://www.andtechnology.org">here</a> while you&apos;re at it.</p>
    </article>
  </Main>
);

export default Index;
