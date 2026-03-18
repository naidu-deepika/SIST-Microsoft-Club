import React, { useEffect, useState } from "react";
import "../index.css";

export default function Home() {

  const [members, setMembers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [teams, setTeams] = useState(0);
  const [workshops, setWorkshops] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMembers((prev) => (prev < 50 ? prev + 1 : prev));
      setProjects((prev) => (prev < 15 ? prev + 1 : prev));
      setTeams((prev) => (prev < 4 ? prev + 1 : prev));
      setWorkshops((prev) => (prev < 10 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* floating background icons */}
      <div className="floating-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png" className="icon icon1"/>
        <img src="https://cdn-icons-png.flaticon.com/512/906/906175.png" className="icon icon2"/>
        <img src="https://cdn-icons-png.flaticon.com/512/2913/2913100.png" className="icon icon3"/>
        <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" className="icon icon4"/>
      </div>

      {/* HERO TEXT */}

      <div className="hero-text">
        <h1 className="welcome-text">
  {"Welcome!".split("").map((char, index) => (
    <span
      key={index}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {char}
    </span>
  ))}
</h1>

        <p className="to-text">To</p>

        <h2 className="club-text">The Microsoft Club</h2>

        <div className="scroll-wrapper">
          <p className="scrolling-text">
            A space where students collaborate, learn modern technologies, and build real-world solutions.
          </p>
        </div>

      </div>

      {/* STATS */}

      <div className="stats">

        <div className="stat-card">
          <h2>{members}+</h2>
          <p>Members</p>
        </div>

        <div className="stat-card">
          <h2>{projects}+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>{teams}+</h2>
          <p>Teams</p>
        </div>

        <div className="stat-card">
          <h2>{workshops}+</h2>
          <p>Workshops</p>
        </div>

      </div>

    </div>
  );
}