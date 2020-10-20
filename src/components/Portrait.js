import React from 'react';

const Portrait = () => {
  return (
    <div className="box bio space-between">
      <div className="name">
        <h1>Travis Tillotson</h1>
        <div>Software Developer</div>
      </div>
      <div className="pic"></div>
      <div className="row">
        <a href="https://github.com/Opus1no2">Github</a>
          &nbsp;<span>/</span>
          <a href="https://www.linkedin.com/in/travis-tillotson-2b210619/">LinkedIn</a>
          &nbsp;<span>/</span>
        <a href="mailto:tillotson.travis@gmail.com">Email</a>&nbsp;
      </div>
    </div>
  );
};

export default Portrait;
