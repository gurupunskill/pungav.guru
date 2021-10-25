import React from 'react';
import '../../static/styles/about.scss';

function About() {
  return (
    <>
      <h3 className="text-content--heading mdc-typography--headline4 light">
        Hi. Salut. வணக்கம்.
      </h3>
      <div className="text-content--body mdc-typography--body1">
        I decided to make a portfolio page for myself during the COVID-19 quarantine but now that
        I&apos;m here, I am at a loss of words. This website was primarily made to be a creative
        outlet for me. The design process for this website has been very rewarding and has allowed
        me to explore and push my aesthetic boundaries.
      </div>
      <div className="text-content--body mdc-typography--body1">
        The gist is that I like computers and programming. I have an undergraduate degree in
        Computer Science from NITK Surathkal and I am looking to pursue a career in research and
        development. I am passionate about design and design philosophy and I&apos;m looking
        forward to opportunities that would help me gain new perspectives.
      </div>
      <div className="text-content--body social-row">
        <a className="mdc-typography--body1" href="https://www.github.com/gurupunskill">GitHub</a>
        <a className="mdc-typography--body1" href="https://www.linkedin.com/in/guru-irl">
          LinkedIn
        </a>
      </div>
      <div className="medium-spacer"> </div>
      <div className="full-width-content">
        <img src="assets/me.webp" alt="Guru sitting on some rocks" />
      </div>
    </>
  );
}

export default About;
