import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Bg from './assets/bg.jpg';
import Cycle from './assets/cycling.jpeg';
import TeamZenith from './assets/team_zenith.png';
import LandingPage from './assets/landing page.png';

function App() {

  const [items, setItems] = useState([
    { title: "Background", desc: "Hulululululu", image: Bg },
    { title: "Cycling", desc: "Ulululululul", image: Cycle },
    { title: "Team Zenith", desc: "Kolalalalala", image: TeamZenith },
    { title: "Landing Page", desc: "Kolakolakola", image: LandingPage },
  ]);

  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <div className="row mt-3">
          {       
            items.map((item, index) => (
              <Card
                index={index}
                title={item.title}
                desc={item.desc}
                image={item.image}
              />
            ))
          }
      </div>
      </div>
    </div>
  );
}

export default App;
