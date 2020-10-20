import React from 'react';
import { Link } from 'gatsby';

const Prototypes = () => {
  return (
    <div className="box learning">
      <h2>Prototypes</h2>
      <ul>
        <li><a href="/spheres.html">Spheres</a></li>
        <li><a href="/orbit0.html">Orbit 0</a></li>
        <li><a href="/orbit1.html">Orbit 1</a></li>
        <li><a href="/orbit2.html">Orbit 2</a></li>
        <li><Link to="/Mandlebrot/">Mandlebrot</Link></li>
        <li><Link to="/CirclePattern/">Circle Patterns</Link></li>
        <li><Link to="/FractalTree/">Fractal Tree</Link></li>
      </ul>
    </div>
  );
};

export default Prototypes;
