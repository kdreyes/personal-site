import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Endeavors/Cell';
import data from '../data/endeavors';

const Endeavors = () => (
  <Main
    title="Endeavors"
    description="Learn about Katrina Delos Reyes' endeavors."
  >
    <article className="post" id="endeavors">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Endeavors</Link></h2>
          <p>Some of my ongoing endeavors and engagements</p>
        </div>
      </header>
      {data.map((endeavor) => (
        <Cell
          data={endeavor}
          key={endeavor.title}
        />
      ))}
    </article>
  </Main>
);

export default Endeavors;
