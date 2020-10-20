import React from "react"
import About from '../components/About';
import Portrait from '../components/Portrait';
import Skills from '../components/Skills';
import Games from '../components/Games';
import Prototypes from '../components/Prototypes';
import '../lib/index'

export default function Home() {
  return (
    <main>
      <div className="cont">
        <div className="row">
          <Portrait />
          <About />
          <Skills />
        </div>
        <div className="row last space-between">
          <Games />
          <Prototypes />
        </div>
      </div>
    </main>
  )
}
