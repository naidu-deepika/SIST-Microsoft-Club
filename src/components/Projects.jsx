import "../projectBackground.css";

function Projects() {
  return (
    <section className="project-bg">
      {/* CONTENT WRAPPER */}
      <div className="projects-wrapper">

        {/* HEADING */}
       <h1 className="project-heading">
        Projects</h1>

        {/* PROJECT CARDS */}
        <div className="projects-container">

          {/* WEATHER */}
          <div className="project-card">
            <img src="/weather.jpeg" alt="Weather App" />

            <h3>Weather Dashboard</h3>

            <p>• Shows real-time weather for any city</p>
            <p>•Displays temperature, humidity, and wind details</p>
            <p>•Simple and clean user interface </p>

            <a
              href="https://satszzz.github.io/Weather-dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          </div>


          {/* CAR WEBSITE */}
          <div className="project-card">
            <img src="/cars.jpeg" alt="Cars App" />

            <h3>Car Web App</h3>

            <p>•Displays different car models and details</p>
            <p>• Simple and clean UI</p>
            <p>• Responsive design</p>

            <a
              href="https://harshini112006.github.io/car-webapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          </div>


          {/* MOVIE / WEEK PROJECT */}
          <div className="project-card">
            <img src="/movie.jpeg" alt="Movie App" />

            <h3>Movie Website</h3>

            <p>• Browse movies and content</p>
            <p>• Displays basic details</p>
            <p>• Simple interactive layout</p>

            <a
              href="https://vishnuputhran01.github.io/week-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;