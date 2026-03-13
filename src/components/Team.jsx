import { useState, useEffect } from "react";
import teamData from "../data/teamData.json";
import "../styles/teamSlider.css";
import "../styles/animatedBackground.css";

function Team(){

/* TOP SLIDER MEMBERS (ONLY OFFICE BEARERS) */
const sliderMembers = teamData.officeBearers;

/* ALL MEMBERS FOR CARDS */
const allMembers = [
  ...teamData.officeBearers,
  ...(teamData.aiMLTeam || []),
  ...(teamData.webAppTeam || []),
  ...(teamData.productionTeam || []),
  ...(teamData.cloudDevopsTeam || []),
  ...(teamData.cybersecurityTeam || []),
  ...(teamData.dataScienceTeam || [])
];
  

/* STATES */

const [index,setIndex] = useState(0);
const [search,setSearch] = useState("");
const [filter,setFilter] = useState("All");
const [selectedMember,setSelectedMember] = useState(null);

/* AUTO SLIDER */

useEffect(()=>{

const interval=setInterval(()=>{
setIndex(prev => (prev+1)%sliderMembers.length);
},3000);

return ()=>clearInterval(interval);

},[sliderMembers.length]);


/* SEARCH + FILTER */
const filteredMembers = allMembers.filter(member => {

const matchSearch =
member.name.toLowerCase().includes(search.toLowerCase());

const matchFilter =
filter === "All" ||
(member.department && member.department === filter);

return matchSearch && matchFilter;

});


return(

<div className="team-container light-gradient-bg">

{/* TITLE */}

<h1 className="team-title">Our Team</h1>

<p className="team-subtitle">
The People Behind Our Innovation
</p>


{/* TOP IMAGE SLIDER */}

<div className="slider">

{sliderMembers.map((member,i)=>{

let position="next";

if(i===index) position="active";

if(
i===index-1 ||
(index===0 && i===sliderMembers.length-1)
){
position="prev";
}

return(

<div key={member.id} className={`card ${position}`}>

<img src={member.image} alt={member.name}/>

{position==="active" &&(

<div className="member-info">

<h3>{member.name}</h3>
<p className="member-role">{member.role}</p>

</div>

)}

</div>

);

})}

</div>


{/* SEARCH */}

<div className="search-container">

<div className="search-wrapper">

<input
type="text"
placeholder="Search member..."
className="search-box"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<span className="search-icon">🔍</span>

</div>

</div>


{/* FILTER BUTTONS */}

<div className="team-filters">

<button
className={`team-filter-btn ${filter==="All"?"active":""}`}
onClick={()=>setFilter("All")}
>
<i className="fa-solid fa-users"></i>
All
</button>


<button
className={`team-filter-btn ${filter==="Office Bearers"?"active":""}`}
onClick={()=>setFilter("Office Bearers")}
>
<i className="fa-solid fa-user-tie"></i>
Office Bearers
</button>

<button
className={`team-filter-btn ${filter==="Web & App Dev" ? "active" : ""}`}
onClick={()=>setFilter("Web & App Dev")}
>
<i className="fas fa-code"></i> Web & App Dev
</button>

<button
className={`team-filter-btn ${filter==="AI & ML" ? "active" : ""}`}
onClick={()=>setFilter("AI & ML")}
>
<i className="fas fa-robot"></i>
AI & ML
</button>

<button
className={`team-filter-btn ${filter==="Data Science & Analytics" ? "active" : ""}`}
onClick={()=>setFilter("Data Science & Analytics")}
>
<i className="fas fa-chart-line"></i>Data Science & Analytics
</button>

<button
className={`team-filter-btn ${filter==="Cybersecurity" ? "active" : ""}`}
onClick={()=>setFilter("Cybersecurity")}
>
<i className="fas fa-shield-alt"></i> Cybersecurity
</button>

<button
className={`team-filter-btn ${filter==="Cloud & DevOps" ? "active" : ""}`}
onClick={()=>setFilter("Cloud & DevOps")}
>
<i className="fas fa-cloud"></i> Cloud & DevOps
</button>

<button
className={`team-filter-btn ${filter==="Production & Media" ? "active" : ""}`}
onClick={()=>setFilter("Production & Media")}
>
<i className="fas fa-video"></i> Production & Media
</button>

</div>


{/* MEMBER CARDS */}

<div className="member-grid">

{filteredMembers.map(member =>(

<div
key={member.id}
className="member-card"
>

<img
src={member.image}
className="member-avatar"
alt={member.name}
/>

<div className="member-basic">

<h3>{member.name}</h3>
<p>{member.role}</p>

</div>


{/* ARROW BUTTON */}

<button
className="details-arrow"
onClick={()=>setSelectedMember(member)}
>
➜
</button>

</div>

))}

</div>



{/* MEMBER POPUP */}
{selectedMember && (

<div className="member-modal">

<div className="modal-content">

<img
src={selectedMember.image}
alt={selectedMember.name}
className="modal-avatar"
/>

<h2 className="modal-name">
{selectedMember.name}
</h2>

<p className="modal-role">
{selectedMember.role}
</p>
<p className="modal-branch">
Branch: {selectedMember.branch}
</p>

<p className="modal-year">
{selectedMember.year}
</p>

<p className="modal-reg">
Register No: {selectedMember.registerNo}
</p>

<p className="modal-bio">
{selectedMember.bio}
</p>


<a
href={selectedMember.linkedin}
target="_blank"
rel="noreferrer"
className="linkedin-btn"
>

<i className="fa-brands fa-linkedin"></i>

LinkedIn

</a>


<button
className="close-btn"
onClick={()=>setSelectedMember(null)}
>

Close

</button>

</div>

</div>

)}


</div>

);

}

export default Team;