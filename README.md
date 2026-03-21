
🚀 Project Overview
Project Name: Microsoft Club Website (Week 3 Project)
This project is a responsive web application built to showcase the Microsoft Club, including team members, projects, and contact details. It was developed using React with a focus on clean UI, dynamic data handling, and modern design.
🛠️ Technologies Used
React (Vite) → for building UI components
CSS + Tailwind CSS → for styling and responsiveness
JavaScript (ES6) → for logic and interactivity
JSON → for storing team member data
Git & GitHub → for version control
Netlify → for deployment
⚙️ Setup & Installation
1️⃣ Create project using Vite
Bash
npm create vite@latest
Select:
Copy code

React → JavaScript
2️⃣ Install dependencies
Bash
npm install
3️⃣ Install Tailwind (basic usage)
Bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Add Tailwind in CSS:
CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
4️⃣ Run the project
Bash
npm run dev
👉 Opens in browser (localhost)
🧩 Project Structure

src/
  components/
    Team.jsx
    Contact.jsx
    About.jsx
    Projects.jsx

  data/
    teamData.json

  styles/
    teamSlider.css
    contactBackground.css
    projectBackground.css

public/
  images
  team photos
💡 Features Implemented
✔ Team page with slider + filtering
✔ Search functionality
✔ Dynamic data from JSON
✔ Light/Dark mode UI
✔ Modal popup for member details
✔ Contact form with social links
✔ Projects section with live links
✔ Animated backgrounds
🔄 GitHub Workflow
1️⃣ Initialize Git
git init
2️⃣ Add files
git add .
3️⃣ Commit
git commit -m "initial project"
4️⃣ Connect GitHub
git remote add origin <your-repo-link>
5️⃣ Push code
git push origin main
🚀 Deployment (Netlify)
1️⃣ Build project
npm run build
👉 Creates:
dist/
2️⃣ Upload to Netlify
Go to Netlify
Drag & drop dist folder
🎉 Output
👉 Live website deployed successfully
🧠 What I Learned
How to build a React project from scratch
Component-based design
Handling JSON data dynamically
Styling using Tailwind + CSS
Debugging and fixing UI issues
Git version control
Deploying a real-world project
