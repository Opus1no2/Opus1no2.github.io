import React from 'react';
import { Link } from 'gatsby';

const Prototypes = () => {
  return (
    <div className="box learning">
      <h2>Prototypes</h2>
      <ul>
        <li><Link to="/Spheres/">Spheres</Link></li>
        <li><Link to="/Orbit0/">Orbit 0</Link></li>
        <li><Link to="/Orbit1/">Orbit 1</Link></li>
        <li><Link to="/Orbit2/">Orbit 2</Link></li>
        <li><Link to="/Mandlebrot/">Mandlebrot</Link></li>
        <li><Link to="/CirclePattern/">Circle Patterns</Link></li>
        <li><Link to="/FractalTree/">Fractal Tree</Link></li>
        <li><Link to="/Narcissus/">Narcissus</Link></li>
      </ul>
    </div>
  );
};

export default Prototypes;
