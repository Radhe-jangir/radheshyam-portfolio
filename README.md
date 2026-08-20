# 🌐 Radheshyam Suthar — AI/ML & Data Analytics 3D Portfolio

<div align="center">

![React 19](https://img.shields.io/badge/React-19.0.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12.0-FF4154?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br />

**A state-of-the-art, 3D interactive portfolio and technical showcase engineered with React 19, TypeScript, Three.js WebGL spatial visualizers, and cyber neo-glassmorphic design.**

[Explore Live Demo](#-live-demo--preview) • [Key Features](#-key-features) • [Local Setup](#-quick-start--local-development) • [Deployment](#-deployment-guide) • [LinkedIn Launch Template](#-linkedin-post-template)

</div>

---

## 🌟 Overview

This portfolio is custom-crafted for **Radheshyam Suthar**, an **AI/ML Developer & Data Analytics Engineer**. It bridges high-performance front-end engineering with interactive Machine Learning simulations, real-time 3D spatial graphics, verified credential vaults, and comprehensive technical architecture blueprints.

---

## ✨ Key Features

- 🌌 **3D Holographic AI Neural Network Canvas**
  - Custom Three.js WebGL canvas rendering multi-layer artificial neural networks.
  - Interactive weights manipulation, dynamic particle connections, glowing activation pulses, and live simulated training loss convergence charts.
- ⚡ **Interactive Machine Learning Playground**
  - Real-time client-side ML predictor (House Price Estimation) comparing **Random Forest**, **Ridge Regression**, and **Decision Trees (CART)** with interactive parameter sliders (sqft, bedrooms, locality grade).
- 💎 **3D Spatial Tilt & Chromatic Specular Glare**
  - Custom physics-based `Card3D` engine simulating real-time gyroscope and mouse-tracking depth, subtle 3D transforms, and chromatic reflection flares.
- 🔬 **Deep Technical Project Showcases**
  - Rich project cards with interactive modals detailing **System Architecture**, **Engineering Approaches**, **Live Metrics**, and **Source Repositories**.
- 🎓 **Interactive Certifications Vault**
  - Filterable credentials ledger (Google, Microsoft, DeepLearning.AI, Postman, LLM Security) with modal credential inspectors and verification badges.
- 💼 **Career Timeline & Leadership**
  - Visual timeline showcasing GDG On Campus roles, ElevateX Digital leadership, and data analytics work with inline filtering.
- 🌗 **Cyber Dark & Crisp Light Theme System**
  - Seamless theme toggle supporting luminous deep space cyber tones and high-contrast editorial light modes with persistent context state.
- 📱 **100% Responsive & High-Performance**
  - Tailored for fluid scaling across mobile phones, tablets, laptops, and ultra-wide displays (up to 4K+ resolutions).

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript 5.8, HTML5, CSS3 |
| **Build & Tooling** | Vite 6, Node.js, TSX, ESBuild |
| **Styling & Effects** | Tailwind CSS v4, Neo-Glassmorphism, Custom HSL Color Tokens |
| **3D & Visuals** | Three.js (WebGL), Canvas 2D, Canvas Confetti |
| **Animations** | Motion (Framer Motion engine) |
| **Iconography** | Lucide React |

---

## 🚀 Quick Start — Local Development (VS Code)

Follow these simple steps to run the application on your computer:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version **18.x** or higher is recommended).
Verify your installation:
```bash
node -v
npm -v
```

### 2. Clone or Extract the Repository
Open your terminal (or VS Code Integrated Terminal: `Ctrl + \`` or `Cmd + \``):
```bash
# If cloned via Git
git clone https://github.com/Radhe-jangir/radheshyam-portfolio.git
cd radheshyam-portfolio

# Or navigate to your unzipped folder in VS Code:
# File -> Open Folder -> select the project folder
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables (Optional)
Copy the example environment file:
```bash
cp .env.example .env
```
*(Note: The core portfolio and ML playground work completely offline with zero configuration!)*

### 5. Launch the Development Server
```bash
npm run dev
```

Your app will be running locally at:
👉 **`http://localhost:3000`** (or the port displayed in your terminal).

---

## 📂 Project Directory Structure

```text
├── index.html                    # HTML entry point with meta tags & fonts
├── package.json                  # Dependencies, build scripts, & configurations
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite build pipeline & Tailwind integration
├── metadata.json                 # Application configuration & metadata
├── src/
│   ├── main.tsx                  # React application mount point
│   ├── App.tsx                   # Main root layout & section sequencing
│   ├── index.css                 # Global Tailwind styles & custom animations
│   ├── types.ts                  # Central TypeScript interfaces & data models
│   ├── context/
│   │   └── ThemeContext.tsx      # Dark/Light theme provider & hook
│   ├── data/
│   │   └── portfolioData.ts      # 🌟 Single source of truth for all your info!
│   └── components/
│       ├── Navbar.tsx            # Sticky navigation bar with mobile drawer
│       ├── Hero.tsx              # High-impact introduction & call-to-actions
│       ├── HeroAiVisualizer.tsx  # Three.js 3D WebGL Neural Network simulator
│       ├── Card3D.tsx            # 3D interactive physics tilt & glare wrapper
│       ├── About.tsx             # Academic bio & core competency highlights
│       ├── TechStack.tsx         # Technical matrix & proficiency visualizer
│       ├── Projects.tsx          # Project showcase grid & carousel
│       ├── ProjectModal.tsx      # Deep dive modal with ML model simulator
│       ├── Experience.tsx        # Career journey & community leadership
│       ├── Certifications.tsx    # Credential vault with filters & badges
│       ├── CertificateInspectorModal.tsx # Certificate detail modal
│       ├── CurrentFocus.tsx      # Learning roadmap & active research tracker
│       ├── WhyMe.tsx             # Value proposition & engineering strengths
│       ├── Achievements.tsx      # Key milestones & hackathons
│       ├── Contact.tsx           # Interactive contact form & direct channels
│       └── Footer.tsx            # Terminal-styled footer & quick links
```

---

## 🎨 How to Customize Your Information

All your personal details, projects, skills, certificates, and work experience live cleanly in one file: **`src/data/portfolioData.ts`**.

To customize with your own updates:
1. Open `src/data/portfolioData.ts` in VS Code.
2. Edit:
   - `PERSONAL_INFO`: Name, titles, bio, social links, email, resume URL.
   - `PROJECTS`: Add new AI/ML projects, GitHub links, live demo URLs, metrics, and architecture steps.
   - `TECH_CATEGORIES`: Update your programming languages, libraries, and skill mastery percentages.
   - `EXPERIENCES`: Add new internships, jobs, or club lead roles.
   - `CERTIFICATIONS`: Add newly completed certifications with verification links.
3. Save the file — the hot reload updates the site immediately!

---

## 🌐 Deployment Guide

Deploy your portfolio to the web in less than 3 minutes for free:

### Option 1: Vercel (Recommended — 1 Click)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D AI Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New"** > **"Project"** and select your repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Vercel will automatically build and assign a free `.vercel.app` domain with instant SSL!

---

### Option 2: Netlify
1. Log in to [Netlify.com](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Choose your repository.
4. Set Build command: `npm run build`
5. Set Publish directory: `dist`
6. Click **Deploy Site**.

---

### Option 3: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. In `vite.config.ts`, add: `base: '/<your-repo-name>/'`
3. In `package.json`, add script: `"deploy": "vite build && gh-pages -d dist"`
4. Run: `npm run deploy`

---

## 💼 LinkedIn Launch Post Template

*Copy, personalize, and share this on LinkedIn when you launch your portfolio to attract recruiters, founders, and tech leads:*

```markdown
🚀 Excited to unveil my new 3D Interactive AI/ML & Data Analytics Portfolio!

As an AI/ML developer passionate about turning complex datasets and neural architectures into impactful software, I wanted my portfolio to do more than just list projects — I wanted it to be an interactive engineering experience.

Here’s what’s under the hood:
🌌 Interactive 3D Neural Network: Built with Three.js (WebGL) to visualize layer activations, dynamic weights, and live loss convergence.
⚡ Real-time ML Playground: Test and compare Random Forest, Ridge Regression, and CART models right in your browser.
💎 3D Spatial Tilt UI: Custom physics-based neo-glassmorphism cards with specular glare.
🔬 Deep-Dive Project Blueprints: Full system architectures, benchmarks, and production-ready code repositories.
🎓 Verified Credentials Vault: Complete ledger of certifications across Google, Microsoft, DeepLearning.AI, and more.

🛠️ Built with: React 19, TypeScript, Three.js, Vite, Tailwind CSS, Motion, and Python/ML architectures.

👉 Check out the live experience: [INSERT YOUR DEPLOYED LINK HERE]
💻 Source Code on GitHub: [INSERT YOUR GITHUB REPO LINK HERE]

I’d love to hear your feedback! Special thanks to everyone in the developer and open-source community who continues to inspire my journey.

#MachineLearning #ArtificialIntelligence #DataScience #WebDevelopment #ReactJS #ThreeJS #TypeScript #Python #DeepLearning #Portfolio #OpenSource #SoftwareEngineering #Developer
```

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the local Vite development server with instant HMR.
- `npm run build` — Compiles TypeScript and creates an optimized production bundle in `/dist`.
- `npm run preview` — Locally preview the production build before deploying.
- `npm run lint` — Runs TypeScript compiler checks to ensure zero type errors.

---

## 🤝 Connect & Contact

- **Name**: Radheshyam Suthar
- **Focus**: AI/ML Engineer • Data Analytics Specialist • Python Developer
- **Email**: [jangirradhe175@gmail.com](mailto:jangirradhe175@gmail.com)
- **LinkedIn**: [linkedin.com/in/radheshyamsuthar](https://www.linkedin.com/)
- **GitHub**: [github.com](https://github.com/Radhe-jangir)

---

<div align="center">
  <sub>Built with ❤️ by Radheshyam Suthar. Star ⭐ this repository if you found it inspiring!</sub>
</div>
