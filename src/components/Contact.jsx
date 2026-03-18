import "../contactBackground.css";

function Contact() {
  return (
    <section id="contact" className="contact-gradient-bg min-h-screen contact-wrapper">

      {/* HEADING */}

      <h1 className="contact-heading text-5xl font-bold mb-12">
        GET IN TOUCH
      </h1>

      {/* FORM CONTAINER */}

      <div className="contact-container">

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input type="email"/>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="4"></textarea>
        </div>

        <button className="send-btn">Send</button>

        </div>
        {/* SOCIAL CARDS */}

<div className="contact-cards">

  {/* DISCORD */}

  <div className="contact-card">
    <i className="fa-brands fa-discord card-icon discord"></i>

    <h3>Discord Community</h3>

    <p>
      Join our Discord server to connect with developers,
      participate in discussions, and stay updated with
      club activities.
    </p>

    <a
      href="https://discord.gg/QeTh5kpv"
      target="_blank"
      rel="noreferrer"
      className="card-btn"
    >
      Join Discord
    </a>
  </div>


  {/* LINKEDIN */}

  <div className="contact-card">
    <i className="fa-brands fa-linkedin card-icon linkedin"></i>

    <h3>LinkedIn Community</h3>

    <p>
      Follow our LinkedIn page to stay updated with
      events, projects, and opportunities within
      our developer community.
    </p>

    <a
      href="https://www.linkedin.com/company/microsoft-club-sathyabama/"
      target="_blank"
      rel="noreferrer"
      className="card-btn"
    >
      Visit LinkedIn
    </a>
  </div>


  {/* INSTAGRAM */}

  <div className="contact-card">
    <i className="fa-brands fa-instagram card-icon instagram"></i>

    <h3>Instagram Updates</h3>

    <p>
      Explore our Instagram page to see highlights
      from events, hackathons, workshops and team
      activities.
    </p>

    <a
      href="https://www.instagram.com/microsoft.sist?igsh=M2JidW82OGFjeGM0"
      target="_blank"
      rel="noreferrer"
      className="card-btn"
    >
      Follow on Instagram
    </a>
  </div>


  {/* CAMPUS */}

  <div className="contact-card">
    <i className="fa-solid fa-location-dot card-icon location"></i>

    <h3>Campus Location</h3>

    <p>
      Our community operates from the campus where
      members collaborate, learn new technologies,
      and build projects together.
    </p>

    <a
      href="https://maps.app.goo.gl/k7cMC7nAzbBNc58q8"
      target="_blank"
      rel="noreferrer"
      className="card-btn"
    >
      View Location
    </a>
  </div>

</div>

    </section>
  );
}

export default Contact;