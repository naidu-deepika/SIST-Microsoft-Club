import "../aboutBackground.css";

function About(){

return(

<section className="about-gradient-bg">

<div className="about-container">

<h1 className="about-title">Who We Are</h1>

<h2 className="about-subtitle">
A Community Built by Developers for Developers
</h2>

<p className="about-desc">
We are a student-driven developer community focused on learning,
collaboration, and building real technology solutions. Our goal is to
create an environment where students can explore modern development
tools, share knowledge, and grow together as innovative problem solvers.
</p>


{/* PILLARS */}

<div className="about-pillars">


{/* 1 */}

<div className="pillar-card pillar1">

<div className="pillar-icon">📘</div>

<div>

<h3>Structured Learning</h3>

<p>
Members work within specialized teams such as Web & App Development
AI & ML,
Data Science & Analytics,
Cybersecurity,
Cloud & DevOps,
Production & Media. Each team focuses
on building skills in its respective technology domain.
</p>

</div>

</div>


{/* 2 */}

<div className="pillar-card pillar2">

<div className="pillar-icon">👥</div>

<div>

<h3>Mentorship & Guidance</h3>

<p>
Every team is guided by experienced team leads
who mentor members, assign learning tasks, review
progress, and help them improve their technical skills
through regular guidance and feedback.
</p>

</div>

</div>


{/* 3 */}

<div className="pillar-card pillar3">

<div className="pillar-icon">🚀</div>

<div>

<h3>Real Project Experience</h3>

<p>
Members collaborate on real-world projects where
they apply their knowledge, solve practical problems,
and gain hands-on development experience.
</p>

</div>

</div>


{/* 4 */}

<div className="pillar-card pillar4">

<div className="pillar-icon">📈</div>

<div>

<h3>Progress Tracking & Growth</h3>

<p>
Team leads track members' progress, provide
suggestions for improvement, and ensure everyone
continues learning and contributing to the team.
</p>

</div>

</div>


</div>

</div>

</section>

)

}

export default About;