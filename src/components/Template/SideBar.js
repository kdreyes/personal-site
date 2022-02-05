import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Katrina Delos Reyes</h2>
        <p><a href="mailto:katrina.mdelosreyes@gmail.com">katrina.mdelosreyes@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Katrina!
        I&apos;m always looking to push the status quo, make positive change,
        and pursue adventure, whether that be through coding, creating, hiking,
        dancing, or exploring new opportunities.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Katrina Delos Reyes <Link to="/">katrinadelosreyes.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
