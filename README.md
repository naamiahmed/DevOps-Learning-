# DevOps Learning Documentary 📘

## description: 

  Welcome to my **DevOps Learning Journey**!  
  This repository is not just code — it’s a **step-by-step diary** of how I’m learning DevOps by building a real-world full-stack project.  
  Each day I document what I built, what commands I ran, the issues I faced, and how I solved them.  
  My goal is to understand DevOps fundamentals deeply while practicing with **CI/CD, Docker, GitHub Actions, and Cloud Deployments**.

## tech_stack:
  - 🖥️ frontend: Next.js (TypeScript)
  - ⚙️ backend: NestJS (TypeScript)
  - 🗄️ database: MongoDB Atlas
  - 🐳 containerization: Docker & Docker Compose
  - 🔄 ci_cd: GitHub Actions
  - 📦 monorepo: Both frontend and backend live inside the same repository

## learning_journey:
  - ### day: 1
    title: "🟢 Frontend Setup (Next.js)"
    tasks:
      - Initialized the Next.js project inside `front-end/`
      - Installed dependencies with `npm install`
      - Verified the development server
        command: npm run dev
      - Successfully ran frontend at http://localhost:3000
  - ### day: 2
    title: "🟠 Backend Setup (NestJS + Basic Authentication)"
    tasks:
      - Created the NestJS backend inside `back-end/`
      - Implemented basic authentication logic (login/register endpoints)
      - Ran backend server
        command: npm run start:dev
      - Tested endpoints locally with Postman
    issues:
      - description: "Nested `.git` repository was automatically created inside backend"
        impact: "Main repository did not track backend changes"
        solution: "Removed the nested git"
          command: rm -rf back-end/.git
        outcome: "Both frontend and backend are now tracked in a single monorepo"
  - ### day: 3
    title: "🔵 MongoDB Integration"
    tasks:
      - Connected NestJS backend to MongoDB Atlas
      - Created schemas/models for authentication
      - Integrated backend API with frontend for sign-in/sign-up
      - Installed MongoDB packages
        command: npm install @nestjs/mongoose mongoose
      - Added MongoDB Atlas connection string in `.env`
  - ### day: 4
    title: "🟣 Docker & CI/CD (GitHub Actions)"
    tasks:
      - Wrote Dockerfile for frontend and backend separately
      - Created `docker-compose.yml` to run both services
      - Built GitHub Actions pipelines
        - Frontend pipeline runs on `front-end` branch
        - Backend pipeline runs on `back-end` branch
      - Learned branch-based CI/CD for independent deployments
      - Build frontend container
        command: docker build -t frontend-app ./front-end
      - Build backend container
        command: docker build -t backend-app ./back-end
      - Run both with Docker Compose
        command: docker-compose up --build

## repository_structure:
  - 📂 front-end/: "Next.js app + Dockerfile"
  - 📂 back-end/: "NestJS app + Dockerfile"
  - 📄 docker-compose.yml: "Combines frontend + backend"
  - ⚡ .github/workflows/: "GitHub Actions pipelines"
  - 📝 README.yml: "DevOps Learning Documentary"

## status:
  completed:
    - ✅ Day 1 – Frontend setup complete
    - ✅ Day 2 – Backend setup + Auth logic
    - ✅ Day 2 – Fixed nested git issue
    - ✅ Day 3 – MongoDB Atlas integration
    - ✅ Day 4 – Docker & CI/CD basics
  upcoming:
    - ☁️ Cloud deployment (AWS/Azure/GCP)
    - ☸️ Kubernetes orchestration

final_note: 

  ✨ This repository is **not just code** — it’s my **daily DevOps learning diary**.  
  It captures my **progress, issues, and solutions** step by step,  
  making it similar to a **real-world DevOps project journey**.
