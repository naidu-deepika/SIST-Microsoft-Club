import { Link } from "react-router-dom";
function Footer() {
return (

<footer className="mt-10 px-[6%] pt-[40px] pb-[10px] mb[20px] bg-[#f8fafc] text-[#1e293b]">

{/* QUOTE */}

<div className="text-center italic py-[10px] mb-[20px] border-b border-[#ddd]">
"Building ideas, learning together, and shaping the future of technology."
</div>


<div className="flex justify-between items-start gap-[60px] flex-nowrap">

{/* BOX 1 */}

<div className="flex flex-col gap-2 w-1/4">

<div className="flex items-center gap-3 mb-2">

<img src="/logo.png" className="w-[40px] h-[40px] rounded-full"/>

<h3 className="font-semibold text-[16px]">Microsoft Club</h3>

</div>

<p>
Where curious minds learn, creators build,and developers
grow together through innovation, collaboration,
and technology.
</p>

</div>


{/* BOX 2 */}

<div className="flex flex-col gap-2 w-1/4">

<h3 className="font-semibold">Explore</h3>

<Link 
to="/" 
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]"
>
<i className="fa-solid fa-house text-[#3b82f6]"></i> Home
</Link>
<Link to="/about" className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-user text-[#3b82f6]"></i> About
</Link>

<Link to="/team" className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-users text-[#3b82f6]"></i> Team
</Link>

<Link to="/projects" className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-folder text-[#3b82f6]"></i> Projects
</Link>

<Link to="/contact" className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-envelope text-[#3b82f6]"></i> Contact
</Link>

</div>


{/* BOX 3 */}

<div className="flex flex-col gap-2 w-1/4">

<h3 className="font-semibold">Our Technical Teams</h3>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-code text-[#3b82f6]"></i> Web & App Development
</div>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-robot text-[#3b82f6]"></i> AI & Machine Learning
</div>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-chart-line text-[#3b82f6]"></i> Data Science & Analytics
</div>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-shield-halved text-[#3b82f6]"></i> Cybersecurity
</div>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-cloud text-[#3b82f6]"></i> Cloud & DevOps
</div>

<div className="flex items-center gap-2 text-[14px]">
<i className="fa-solid fa-video text-[#3b82f6]"></i> Production & Media
</div>

</div>


{/* BOX 4 */}

<div className="flex flex-col gap-2 w-1/4">

<h3 className="font-semibold">Connect With Us</h3>

<a href="mailto:microsoftclub.sist@gmail.com"
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-envelope text-[#3b82f6]"></i> Email
</a>

<a href="https://www.linkedin.com/company/microsoft-club-sathyabama/"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-brands fa-linkedin text-[#3b82f6]"></i> LinkedIn
</a>

<a href="https://www.instagram.com/microsoft.sist?igsh=M2JidW82OGFjeGM0"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-brands fa-instagram text-[#3b82f6]"></i> Instagram
</a>

<a href="https://discord.gg/QeTh5kpv"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-brands fa-discord text-[#3b82f6]"></i> Discord
</a>

<a href="https://maps.app.goo.gl/k7cMC7nAzbBNc58q8"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 text-[14px] text-inherit no-underline hover:text-[#3b82f6]">
<i className="fa-solid fa-location-dot text-[#3b82f6]"></i> Visit Campus
</a>

<p className="mt-2">
Follow our journey and stay updated with our latest projects,
workshops, and Club events.
</p>

</div>

</div>


<div className="text-center mt-10 pt-4 border-t border-[#d1d5db] text-[13px] opacity-80">
© 2026 Microsoft Club. All rights reserved.
</div>

</footer>

);
}

export default Footer;
