import React from 'react';
import { Link } from 'gatsby';

const Prototypes = () => {
  return (
    <div className="box learning">
      <h2>Prototypes</h2>
      <ul>
        <li><Link to="/Spheres/">Spheres</Link></li>
        <li><Link to="/Orbit0/">Orbit 0</Link></li>
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
