# DevOps Learning Project 🚀  

This repository is a **hands-on DevOps learning project** where I practice setting up and managing a full-stack application using modern DevOps practices. It includes a **frontend (Next.js)**, **backend (NestJS)**, and a **MongoDB Atlas database**, all containerized with **Docker** and orchestrated via **docker-compose**.  

---

## 📌 Tech Stack  

### Frontend  
- **Framework**: Next.js  
- **Language**: TypeScript  
- **Package Manager**: npm  
- **Start Command**: `npm run dev`  

### Backend  
- **Framework**: NestJS  
- **Language**: TypeScript  
- **Database**: MongoDB Atlas  
- **Start Command**: `npm run start:dev`  

### DevOps & Tools  
- **Containerization**: Docker & Docker Compose  
- **Version Control**: Git + GitHub  
- **CI/CD**: GitHub Actions  
- **Cloud DB**: MongoDB Atlas  

---

## ⚙️ Project Workflow  

The workflow of this project follows a **branch-based CI/CD setup**:  

1. **Frontend Branch (`front-end`)**  
   - Contains the **Next.js app** and its **Dockerfile**.  
   - A dedicated **GitHub Actions pipeline** builds, tests, and deploys changes whenever code is pushed to this branch.  

2. **Backend Branch (`back-end`)**  
   - Contains the **NestJS app** and its **Dockerfile**.  
   - A dedicated **GitHub Actions pipeline** builds, tests, and deploys changes whenever code is pushed to this branch.  

3. **Main Branch (`main`)**  
   - Serves as the **integration branch** for the whole project.  
   - Contains the **docker-compose.yml**, combining both frontend and backend services.  
   - Can be used for local full-stack development with:  
     ```bash
     docker-compose up --build
     ```

---

## 🔄 CI/CD Pipeline  

The CI/CD pipelines are designed to mimic **real-world DevOps workflows**:  

- **Continuous Integration (CI)**  
  - Runs automatically on each push or pull request.  
  - Lints and builds both frontend and backend code.  
  - Ensures Docker images are built successfully.  

- **Continuous Deployment (CD)**  
  - Deploys frontend and backend separately when changes are merged into their respective branches (`front-end` or `back-end`).  
  - Deployment targets can be extended later (e.g., AWS EC2, Azure, GCP, or Kubernetes).  


## 🗂️ Repository Structure  

