# DevOps Practical Work — Ubuntu Server, Docker, Jenkins and GitHub

## Student Information

**Name:** Baha Essid
**Program:** Master's Degree in DevOps and Cloud Computing
**Institution:** ISET Tozeur
**Year:** 2026

---

# 1. Ubuntu Server 26.04 Installation and SSH Configuration

## 1.1 Ubuntu Server Installation

Ubuntu Server 26.04 LTS was installed in a VMware virtual machine.

The virtual machine was configured with:

- Operating System: Ubuntu Server 26.04 LTS
- Virtualization platform: VMware
- Network: NAT
- SSH server: OpenSSH Server
- User: `baha`

After installation, the IP address of the virtual machine was obtained with:

```bash
ip addr
```

The VM IP address used during this practical work was:

```text
192.168.213.136
```

## 1.2 SSH Service Verification

The SSH service was verified with:

```bash
sudo systemctl status ssh
```

The SSH service was running successfully.

## 1.3 SSH Configuration

SSH allows the physical Windows machine to securely connect to the Ubuntu Server virtual machine.

The SSH connection was tested from Windows PowerShell with:

```powershell
ssh baha@192.168.213.136
```

After authentication, the Ubuntu terminal was accessible remotely from the Windows physical machine.

### Screenshot

```text
<img width="951" height="246" alt="1" src="https://github.com/user-attachments/assets/2f7ba8eb-9fa3-4243-bcea-17340f857e88" />

```

---

# 2. Test SSH Access from the Physical Machine

The Ubuntu Server was accessed remotely from the Windows physical machine using SSH.

From Windows PowerShell:

```powershell
ssh baha@192.168.213.136
```

After entering the Ubuntu user's password, the remote Ubuntu shell was successfully opened.

This confirms that:

- The Ubuntu Server is reachable from the physical machine.
- The SSH service is running.
- Remote administration through SSH is working correctly.

---

# 3. Docker Installation

Docker was installed on the Ubuntu Server to provide containerization capabilities.

## 3.1 Update the Package Repository

```bash
sudo apt update
```

## 3.2 Install Docker

Docker was installed on the Ubuntu Server.

The Docker installation was then verified with:

```bash
docker --version
```

The Docker service was also checked with:

```bash
sudo systemctl status docker
```

The Docker service was active and running.

## 3.3 Docker Verification

Docker can also be tested with:

```bash
sudo docker run hello-world
```

The successful execution confirms that Docker is correctly installed and able to create and run containers.

### Screenshot

```text
<img width="752" height="75" alt="2" src="https://github.com/user-attachments/assets/7e651f1e-c545-4a7e-8368-4fbd2b7fbcb2" />

```

---

# 4. Jenkins Installation

Jenkins was installed on the Ubuntu Server as a system service.

## 4.1 Install Java

Jenkins requires Java. Java 21 was installed and verified.

```bash
java -version
```

The installed version was Java 21.

## 4.2 Add the Jenkins Repository Key

The Jenkins repository key was added with:

```bash
sudo mkdir -p /etc/apt/keyrings

sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
```

The Jenkins repository was then configured:

```bash
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | \
sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
```

<img width="1452" height="612" alt="3" src="https://github.com/user-attachments/assets/1e4546b5-0208-4123-b3c5-de0bd32ce099" />

## 4.3 Install Jenkins

The package repository was updated:

```bash
sudo apt update
```

Jenkins was installed with:

```bash
sudo apt install -y jenkins
```

<img width="1276" height="346" alt="4" src="https://github.com/user-attachments/assets/dfa9aefc-e78a-434e-b389-cdf2b669923e" />

## 4.4 Verify Jenkins Service

The Jenkins service was checked with:

```bash
sudo systemctl status jenkins
```

The service was successfully running.

Jenkins was also configured to start automatically with the system.

<img width="1445" height="261" alt="5" src="https://github.com/user-attachments/assets/cfc5f662-9976-4e29-91fe-9a768eeeecc4" />

## 4.5 Access Jenkins from the Physical Machine

Jenkins uses port `8080` by default.

From the Windows physical machine, the Jenkins web interface was accessed using:

```text
http://192.168.213.136:8080
```

The Jenkins initial administrator password was obtained from:

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

The Jenkins setup was then completed through the web interface.

### Screenshot

```text
<img width="1916" height="926" alt="6" src="https://github.com/user-attachments/assets/7448af9c-15a8-4cbe-9c7a-e5058e49e7ee" />

```

---

# 5. Creation of a One-Page CV

A one-page CV was created using:

- HTML5
- CSS3
- JavaScript

The CV is stored in the `cv` directory of this Git repository.

Project structure:

## 5.1 HTML5

The file `index.html` contains the structure and content of the CV.

It includes sections such as:

- Profile
- Education
- Technical Skills
- Projects
- DevOps Interests
- Contact information

## 5.4 Running the CV

The CV can be opened directly in a web browser by opening:

```text
cv/index.html
```

The CV was tested successfully in a web browser.

### Screenshot

```text
<img width="1917" height="976" alt="7" src="https://github.com/user-attachments/assets/6e2ce7e3-84cb-48b7-a1b7-2232d7ade6be" />

```

---

# 6. Configure GitHub SSH Authentication

GitHub SSH authentication was configured to allow the local Git repository to communicate securely with GitHub.

## 6.1 Check Existing SSH Keys

The `.ssh` directory was checked from Windows PowerShell:

```powershell
Get-ChildItem $env:USERPROFILE\.ssh
```

Initially, no Ed25519 SSH key pair was present.

## 6.2 Generate an Ed25519 SSH Key

A new Ed25519 SSH key was generated with:

```powershell
ssh-keygen -t ed25519 -C "essidbaha18@gmail.com"
```

The default location was used:

```text
C:\Users\xxxx\.ssh\id_ed25519
```

This generated two files:

```text
id_ed25519
id_ed25519.pub
```

The private key is stored locally and must never be shared.

The public key is stored in:

```text

```

## 6.3 Display the Public Key

The public key was displayed with:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

The complete public key was copied.

<img width="1067" height="510" alt="8" src="https://github.com/user-attachments/assets/370b1e6e-898c-4849-9627-bf355d97ad2b" />

## 6.4 Add the SSH Key to GitHub

In GitHub:

```text
Settings
→ SSH and GPG keys
→ New SSH key
```

The following configuration was used:

```text
Title: Windows DevOps PC
Key type: Authentication Key
```

The complete public key was pasted into the Key field and the key was added successfully.

## 6.5 Test GitHub SSH Authentication

The SSH connection was tested with:

```powershell
ssh -T git@github.com
```

The authentication was successful.

GitHub returned:

```text
Hi BahaEssid1! You've successfully authenticated, but GitHub does not provide shell access.
```

This confirms that the Windows machine can authenticate with GitHub using SSH.

### Screenshot

```text
<img width="1070" height="82" alt="10" src="https://github.com/user-attachments/assets/1851957b-ee5f-4721-958f-4ca8ccff19b1" />

```

II. Evolution of the Mini-CV into a DevSecOps Portfolio

# 7. Portfolio Improvements

The original one-page CV was upgraded into a responsive DevSecOps Portfolio using HTML5, CSS3, and JavaScript.

The portfolio now contains the following sections:

About: Academic background and professional interests.

Skills: Technologies related to development, DevOps, and cloud computing.

Projects: Selected academic and personal projects.

Experience & Learning: Practical labs and academic experience.

Contact: Professional contact information and GitHub profile.

Additional improvements include responsive navigation, project cards, a consistent visual design, and an interactive dark/light theme toggle.

Technologies Used

HTML5 for page structure.

CSS3 for layout, styling, and responsive design.

## JavaScript for interactive theme switching.

<img width="1901" height="912" alt="11" src="https://github.com/user-attachments/assets/1887fba7-f74c-4bc7-9329-02a5755e2293" />

<img width="1897" height="926" alt="12" src="https://github.com/user-attachments/assets/87f73d0f-df5f-41f6-ad43-989c948779e4" />

<img width="1887" height="912" alt="13" src="https://github.com/user-attachments/assets/1de07ead-cd42-4c4c-9f69-c69ecf6fb833" />

# Step 9 — Dynamic Project Rendering with JavaScript

Objective

The projects section of the DevSecOps portfolio is generated dynamically using JavaScript. Project information is stored in an array of objects, and the renderProjects() function creates the HTML cards automatically.

JavaScript Code

The following excerpt demonstrates how project data is stored and rendered dynamically.

const projects = [
{
title: "E-commerce Microservices Platform",
description:
"A microservices project exploring REST APIs, service separation, automated testing, and containerization.",
technologies: ["Node.js", "Microservices", "Docker", "Jenkins"],
github: "https://github.com/BahaEssid1",
linkLabel: "Explore repositories",
},
{
title: "DevOps Portfolio",
description:
"A responsive personal portfolio presenting technical skills, projects, and hands-on DevOps learning.",
technologies: ["HTML", "CSS", "JavaScript", "Git"],
github: "https://github.com/BahaEssid1",
linkLabel: "View GitHub profile",
},
{
title: "K3s Kubernetes Lab",
description:
"A practical lab exploring Kubernetes concepts, cluster nodes, deployments, services, and Linux administration.",
technologies: ["Ubuntu", "K3s", "Kubernetes", "Networking"],
github: "https://github.com/BahaEssid1",
linkLabel: "Explore repositories",
},
{
title: "Jenkins CI/CD Lab",
description:
"A learning project focused on Git integration, automated build workflows, testing, and continuous integration.",
technologies: ["Jenkins", "GitHub", "Linux", "CI/CD"],
github: "https://github.com/BahaEssid1",
linkLabel: "Explore repositories",
},
{
title: "Vagrant Infrastructure Lab",
description:
"A virtual machine lab for practicing reproducible environments and automated provisioning.",
technologies: ["Vagrant", "VirtualBox", "Ubuntu", "Automation"],
github: "https://github.com/BahaEssid1",
linkLabel: "Explore repositories",
},
];

      // Generate project cards from the projects array.
      function renderProjects() {
        const container = document.getElementById("projects-container");

        if (!container) {
          console.error("Projects container was not found.");
          return;
        }

        container.innerHTML = projects
          .map((project, index) => {
            const technologyTags = project.technologies
              .map(
                (technology) => `<span class="tech-tag">${technology}</span>`,
              )
              .join("");

            return `
                    <article class="project-card">
                        <span class="project-number">
                            PROJECT ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>${project.title}</h3>

                        <p>${project.description}</p>

                        <div class="project-technologies">
                            ${technologyTags}
                        </div>

                        <a
                            class="project-link"
                            href="${project.github}"
                            target="_blank"
                            rel="noopener noreferrer">
                            ${project.linkLabel} ↗
                        </a>
                    </article>
                `;
          })
          .join("");
      }

<img width="1846" height="812" alt="14" src="https://github.com/user-attachments/assets/776e75bd-86fb-4489-a011-3d047fe21a70" />

# Step 10 — Create a Dockerfile for the DevSecOps Portfolio

Objective

Create a Dockerfile using the official Nginx Alpine image to serve the DevSecOps Portfolio as a static website.

Dockerfile

FROM nginx:alpine

COPY cv/ /usr/share/nginx/html/

EXPOSE 80

Explanation

FROM nginx:alpine: Uses the lightweight official Nginx Alpine image as the base image.

COPY cv/ /usr/share/nginx/html/: Copies the portfolio files into the default Nginx web directory.

EXPOSE 80: Documents the HTTP port used by Nginx inside the container.

The Dockerfile allows the portfolio to be packaged into a portable image and served through an Nginx web server without installing Nginx directly on the host operating system.

<img width="961" height="322" alt="15" src="https://github.com/user-attachments/assets/b7e4f912-697b-4bf9-8d0b-b69adc91b830" />

# Step 11 — Build the Docker Image

Objective

Build a Docker image named cv-docker using the Dockerfile created in Step 10.

Command

docker build -t cv-docker .

The command was executed from the project directory on the Ubuntu Server VM. Docker downloaded the required Nginx Alpine base image, copied the portfolio files, and successfully built the cv-docker:latest image.

Verification

docker images

The output confirmed that the cv-docker:latest image was created successfully.

<img width="977" height="57" alt="16" src="https://github.com/user-attachments/assets/c08d58b9-b042-4b94-93cc-7dc95862348a" />

# Step 12 — Run the Container and Access the Portfolio

Objective

Run the cv-docker image in a Docker container, publish the website on a host port, and verify access from the physical Windows machine.

Command

docker run -d --name cv-container -p 8081:80 cv-docker

Explanation

-d: Runs the container in the background.

--name cv-container: Assigns the container the name cv-container.

-p 8081:80: Maps port 8081 on the Ubuntu VM to port 80 inside the container.

cv-docker: Specifies the image used to create the container.

Port 8081 was selected because port 8080 was already in use on the VM.

Verification

Check the running container:

docker ps

The container started successfully with the following port mapping:

0.0.0.0:8081->80/tcp

Test the HTTP response from the Ubuntu VM:

curl -I http://localhost:8081

The server returned:

HTTP/1.1 200 OK
Server: nginx/1.31.8
Content-Type: text/html

Access from the Physical Machine

The portfolio was successfully accessed from the Windows browser using:

http://192.168.213.136:8081/

This confirms that the website is served by Nginx inside the Docker container and is accessible from the physical machine through the Ubuntu VM's network address.

Screenshots

<img width="1916" height="942" alt="17" src="https://github.com/user-attachments/assets/05dcebe0-a3b8-4a48-8dc6-0ea00317b775" />

# 7. Deploying the Portfolio with Docker Compose

## 7.1 Docker Compose Configuration

A `docker-compose.yml` file was created to define and manage the portfolio container.

The configuration builds the Docker image from the project directory, maps host port `8081` to container port `80`, and configures the container to restart unless it is explicitly stopped.

## 7.2 Deploying the Application

The application was deployed on Ubuntu Server using:

```bash
docker compose up -d --build
```

The `-d` option runs the service in the background, while `--build` builds the image before starting the container.

## 7.3 Verifying the Deployment

The service status was checked with:

```bash
docker compose ps
```

<img width="1442" height="92" alt="18" src="https://github.com/user-attachments/assets/a781a96c-03ee-42d0-9925-52e5de7a50f5" />

The HTTP response was verified using:

```bash
curl -I http://localhost:8081
```

The portfolio was accessible from the Windows host at:

`http://192.168.213.136:8081`

<img width="1916" height="942" alt="17" src="https://github.com/user-attachments/assets/167d1915-c624-4db2-9e61-1f3e2af800ea" />

# 8. Publishing the Project to GitHub Using SSH

## 8.1 SSH Authentication

SSH authentication was configured to allow secure communication between the local development environment and GitHub.

The connection was tested using:

```bash
ssh -T git@github.com
```

## 8.2 Updating the Remote Repository

The Git remote was configured to use the SSH URL:

```bash
git remote set-url origin git@github.com:BahaEssid1/devops-tp.git
git remote -v
```

## 8.3 Publishing Changes

The project changes were committed and pushed to GitHub using:

```bash
git add docker-compose.yml README.md screenshots/
git commit -m "Deploy portfolio with Docker Compose"
git push origin main
```

Repository: [BahaEssid1/devops-tp](https://github.com/BahaEssid1/devops-tp)

### Screenshot

<img width="1135" height="52" alt="19" src="https://github.com/user-attachments/assets/bca3f605-2243-4175-bf06-f6ac8c55e0fa" />

<img width="1440" height="535" alt="20" src="https://github.com/user-attachments/assets/1740d6c4-da03-4735-9984-744f6eb0a950" />

# 9. Migrating the DevSecOps Portfolio to Next.js

## 9.1. Task 18 — Create a Next.js Portfolio

A new version of the DevSecOps Portfolio was developed using Next.js, JavaScript, React components, and CSS. The goal was to preserve the main sections of the original HTML/CSS/JavaScript portfolio while improving the application's structure and maintainability.

The new portfolio retains the main sections:

Header and navigation

About

Skills

Projects

Experience and learning

Contact

Footer

Technologies Used

Next.js

React

JavaScript

CSS

Node.js and npm

Project Creation Command

The application was created using the official Next.js project generator:

npx create-next-app@latest portfolio-nextjs

The project was configured to use JavaScript, ESLint, the App Router, and CSS without Tailwind CSS.

Run the Application

Navigate to the application directory and install its dependencies:

```bash
cd portfolio-nextjs
npm install
```

Start the development server:

```bash
npm run dev
```

Open the following address in a browser:

http://localhost:3000

To generate an optimized production build, run:

```bash
npm run build
```

Application Screenshot

The following screenshot shows the Next.js version of the DevSecOps Portfolio.

<img width="1342" height="685" alt="27" src="https://github.com/user-attachments/assets/8c451c60-4cf3-47ba-93a0-d8d286684ee9" />

Screenshot: Next.js Portfolio Homepage

<img width="1917" height="972" alt="22" src="https://github.com/user-attachments/assets/5d7f873a-fed2-4e6f-a658-49cade93ccfa" />

## 9.2. Task 19 — Create Reusable Components

The portfolio was organized into reusable React components. Each component is responsible for displaying a specific section of the application.

The main components are:

Component

Responsibility

Header.js

Navigation menu and theme toggle

About.js

Personal introduction and profile information

Skills.js

Technical skills and areas of expertise

Projects.js

Display project cards and project information

Contact.js

Contact information and communication links

Footer.js

Footer content and links

Additional components, such as Experience.js, are used to keep the application organized.

Component Structure

---

portfolio-nextjs/
├── app/
│ ├── layout.js
│ ├── page.js
│ ├── globals.css
│ └── projects/
│ ├── page.js
│ └── [slug]/
│ └── page.js
├── components/
│ ├── Header.js
│ ├── About.js
│ ├── Skills.js
│ ├── Projects.js
│ ├── Experience.js
│ ├── Contact.js
│ └── Footer.js
├── data/
│ ├── skills.js
│ └── projects.js
├── public/
├── package.json
└── README.md

---

This structure separates the user interface, page routing, styling, and data. Components can be reused across different pages without duplicating their implementation.

<img width="452" height="882" alt="26" src="https://github.com/user-attachments/assets/c2c66f39-8c99-4b43-9085-93609acc4386" />

## 9.3. Task 20 — Separate Skills and Projects Data

The information displayed in the Skills and Projects sections was moved into separate JavaScript data files.

This approach separates content from presentation and makes it easier to update the portfolio without modifying the components responsible for rendering it.

Skills Data

The file data/skills.js contains an array of skill objects.

Example:

const skills = [
{
title: "Linux & Networking",
description:
"Linux administration, Ubuntu Server, SSH, networking fundamentals, and troubleshooting.",
},
{
title: "Containers",
description:
"Docker images, containers, Dockerfiles, Docker Compose, and containerized applications.",
},
{
title: "CI/CD",
description:
"Git, GitHub, Jenkins pipelines, automated testing, and software delivery workflows.",
},
];

export default skills;

Projects Data

The file data/projects.js contains the project information used to generate project cards and individual project pages.

Example:

const projects = [
{
slug: "ecommerce-microservices-platform",
title: "E-commerce Microservices Platform",
description:
"A microservices-based e-commerce application.",
technologies: [
"JavaScript",
"Node.js",
"Microservices",
"Docker",
],
status: "In Progress",
details:
"A project exploring microservices architecture and DevOps practices.",
github: "https://github.com/BahaEssid1",
},
];

export default projects;

The examples above illustrate the data structure. The application uses the complete arrays defined in its actual data files.

Benefits

Maintainability: Skills and projects can be updated in one place.

Reusability: The same data can be displayed on multiple pages.

Consistency: Project cards and project detail pages use a shared source of information.

Scalability: New skills and projects can be added without rewriting the components.

## 9.4. Task 21 — Create Dedicated Project Pages

Two project-related routes were implemented using the Next.js App Router.

Projects Listing — /projects

The /projects page displays all projects stored in data/projects.js. It reuses the Header, Projects, and Footer components.

Example URL:

http://localhost:3000/projects

Individual Project Details — /projects/project-name

The dynamic route app/projects/[slug]/page.js displays the details of a specific project based on its slug.

For example:

http://localhost:3000/projects/ecommerce-microservices-platform

The page displays the project's title, description, details, technologies, and a link to the GitHub profile.

The generateStaticParams() function generates routes for the projects defined in the data file. This allows Next.js to pre-render the corresponding project pages during the production build.

If a requested slug does not match an existing project, the application displays the Next.js not-found page.

Screenshots

Screenshot 1: Projects Listing Page

<img width="1917" height="951" alt="23" src="https://github.com/user-attachments/assets/7446e52d-0c88-478e-b694-2cb7a6af8f77" />

Screenshot 2: Individual Project Details Page

<img width="1917" height="972" alt="24" src="https://github.com/user-attachments/assets/c0d89ccc-f71b-44dd-826a-ef414dacef90" />

<img width="1917" height="972" alt="25" src="https://github.com/user-attachments/assets/91de7347-93cf-4a00-9cf9-8bbc0af98eaa" />

## 9.5. Validation and Build

The application was tested locally to verify the homepage, reusable components, project listing, and dynamic project detail routes.

The production build was executed using:

npm run build

The build completed successfully, and Next.js generated the static project pages from the project data.

Result: The Next.js portfolio provides a component-based structure, separated data files, and dedicated routes for listing projects and viewing individual project details.

## 10. Jenkins Pipeline

### 10.1. Objective

The objective of this section is to create a Jenkins Pipeline that automatically retrieves the DevSecOps Portfolio repository from GitHub, installs the dependencies of the Next.js application, and builds the application for production.

The pipeline is defined in a `Jenkinsfile` located at the root of the repository. It automates the main steps required to validate the application through Jenkins.

### 10.2. Jenkinsfile

The following `Jenkinsfile` defines the pipeline:

```groovy
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        APP_DIR = 'portfolio-nextjs'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm ci'
                }
            }
        }

        stage('Build Next.js') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Portfolio checkout, dependency installation, and Next.js build completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs above for details.'
        }
    }
}
```

### 10.3. Task 22 — Automatic GitHub Checkout

The first stage, `Checkout`, retrieves the source code from the GitHub repository using the Jenkins SCM configuration.

The pipeline is configured to use the `main` branch and the `Jenkinsfile` stored at the root of the repository.

This stage ensures that Jenkins obtains the latest available source code before executing the subsequent steps.

**Result:** Jenkins successfully cloned the repository and checked out the `main` branch.

**Screenshot — Jenkins Pipeline Execution**

<img width="931" height="292" alt="29" src="https://github.com/user-attachments/assets/86ab1460-0295-467c-ad0c-786fe2e1b4a0" />

### 10.4. Task 23 — Install Next.js Dependencies

The second stage, `Install Dependencies`, installs the packages required by the Next.js application.

The pipeline executes the following command inside the `portfolio-nextjs` directory:

```bash
npm ci
```

The `npm ci` command installs dependencies according to the `package-lock.json` file. It is suitable for automated builds because it provides a reproducible dependency installation based on the lockfile.

**Result:** Jenkins successfully installed 346 packages and completed the dependency installation stage.

**Screenshot — Install Dependencies Stage**

<img width="955" height="246" alt="30" src="https://github.com/user-attachments/assets/87983ece-1325-49ac-8563-1c688099c5f1" />

### 10.5. Task 24 — Build the Next.js Application

The third stage, `Build Next.js`, builds the portfolio for production using the following command:

```bash
npm run build
```

This command runs the Next.js production build process. It compiles the application, performs TypeScript checks, generates static pages, and prepares the optimized production output.

The build generated the homepage, the projects listing page, and the dynamic project detail pages.

**Result:** The production build completed successfully. Jenkins displayed the generated routes and finished the pipeline with the status `SUCCESS`.

**Screenshot — Next.js Build Result**

<img width="982" height="256" alt="31" src="https://github.com/user-attachments/assets/fa2002e9-04db-4516-b761-ce51541fcb4a" />

### 10.6. Pipeline Validation

The Jenkins Pipeline was executed successfully, and all three stages completed without errors:

| Stage                | Description                                  | Result  |
| -------------------- | -------------------------------------------- | ------- |
| Checkout             | Retrieves the repository from GitHub         | SUCCESS |
| Install Dependencies | Installs Next.js dependencies using `npm ci` | SUCCESS |
| Build Next.js        | Builds the application using `npm run build` | SUCCESS |

The final Jenkins console output confirmed:

```text
Portfolio checkout, dependency installation, and Next.js build completed successfully.
Finished: SUCCESS
```

<img width="1911" height="872" alt="28" src="https://github.com/user-attachments/assets/bf3f09d6-a444-4df0-9c55-ff6f0999eba8" />

The installation log also reported five high-severity dependency vulnerabilities. Although these did not prevent the build from succeeding, they should be investigated separately using `npm audit`.

### 10.7. Conclusion

The first Jenkins Pipeline for the DevSecOps Portfolio has been implemented and validated successfully. It automates source code retrieval from GitHub, dependency installation, and the production build of the Next.js application.

This pipeline establishes the foundation for a CI/CD workflow. Further improvements could include automated testing, dependency and security scanning, build caching, Docker image creation, and application deployment.

## VII. Automatisation avec Ansible

### 25 Installation d'Ansible

Ansible was installed on the Ubuntu administration VM to automate server configuration and package installation.

Verify the installation:

```bash
ansible --version
```

### 26 Configuration de l'inventaire et test de connexion

The `ansible/inventory` file defines the hosts managed by Ansible.

Current inventory:

```ini
[servers]
localhost ansible_connection=local
```

Test the connection:

```bash
cd ~/devops-tp/ansible
ansible all -i inventory -m ping
```

Expected result: `localhost` returns `SUCCESS` and `ping: pong`.

<img width="1466" height="292" alt="32" src="https://github.com/user-attachments/assets/a478408b-aec8-49a6-94f1-1473e4368943" />

### 27 Installation automatique d'un package Linux

The `ansible/install-package.yml` playbook updates the APT package cache and ensures that `curl` is installed.

Execute the playbook:

```bash
sudo ansible-playbook -i inventory install-package.yml
```

Verify the installation:

```bash
curl --version
```

<img width="1462" height="460" alt="33" src="https://github.com/user-attachments/assets/ed3e2f41-4dc9-4194-8c7f-35a9213b63d1" />

### 28 Installation automatique de Docker

The `ansible/install-docker.yml` playbook updates the APT package cache, installs Docker, and ensures that the Docker service is enabled and running.

Execute the playbook:

```bash
sudo ansible-playbook -i inventory install-docker.yml
```

Verify Docker:

```bash
docker --version
systemctl is-active docker
```

Docker was installed successfully, and the service returned `active`.

<img width="1472" height="537" alt="34" src="https://github.com/user-attachments/assets/347e6dc4-1d80-4456-83b4-c94f7ccb123b" />

**Note:** The current inventory uses `localhost` with a local connection. Remote management of a separate server would require a remote host in the inventory and SSH connectivity.

## VIII. Développement de l'API Node.js / Express

### 29. Création de l'API

Une API REST a été créée dans le dossier `api/` à l'aide de Node.js et du framework Express. Elle est indépendante du frontend Next.js et peut être exécutée séparément.

#### Structure du projet

```text
devops-tp/
├── api/
│   ├── server.js
│   ├── projects.js
│   ├── skills.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
├── portfolio-nextjs/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── .env.example
│   ├── Dockerfile
│   └── next.config.mjs
├── cv/
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── .gitignore
└── README.md
```

Le fichier `server.js` définit le serveur Express et les différentes routes de l'API. Les fichiers `projects.js` et `skills.js` contiennent les données utilisées pour les projets et les compétences.

Pour installer les dépendances et démarrer l'API indépendamment du frontend :

```bash
cd api
npm ci
npm start
```

Le serveur écoute sur le port `4000`.

<img width="1152" height="315" alt="45" src="https://github.com/user-attachments/assets/12378c54-c859-49e7-81bb-feb7729ee543" />

---

### 30. Route `GET /api/health`

La route `/api/health` permet de vérifier que l'API fonctionne correctement.

Exemple de requête :

```http
GET /api/health
```

Commande de test :

```bash
curl http://localhost:4000/api/health
```

Exemple de réponse JSON :

```json
{
  "status": "healthy",
  "service": "devsecops-portfolio-api",
  "timestamp": "2026-10-27T08:40:02.505Z"
}
```

Le champ `status` indique l'état de santé de l'API, tandis que `timestamp` correspond à la date et à l'heure de la réponse.

<img width="1142" height="692" alt="35" src="https://github.com/user-attachments/assets/4520837b-2ea1-4c9b-8ae8-8a0fe89534a6" />

---

### 31. Route `GET /api/profile`

La route `/api/profile` retourne les principales informations du portfolio au format JSON.

Exemple de requête :

```bash
curl http://localhost:4000/api/profile
```

Cette route permet au frontend ou à un autre client de récupérer les informations du profil sans accéder directement au code de présentation.

<img width="1317" height="797" alt="36" src="https://github.com/user-attachments/assets/a19f2443-ac91-4d5f-ae9f-bc3abd90bd76" />

---

### 32. Route `GET /api/projects`

La route `/api/projects` retourne la liste des projets du portfolio au format JSON.

Exemple de requête :

```bash
curl http://localhost:4000/api/projects
```

La réponse contient les projets disponibles ainsi que leur nombre. L'API retourne actuellement cinq projets.

Exemple de structure de réponse :

```json
{
  "count": 5,
  "projects": ["... données des projets ..."]
}
```

_Remarque : les points de suspension illustrent uniquement la structure du résultat. La réponse réelle contient les données des projets._

<img width="1235" height="811" alt="37" src="https://github.com/user-attachments/assets/96587e63-1c68-4981-9637-6ba222f2389a" />

---

### 33. Route `GET /api/skills`

La route `/api/skills` retourne les compétences utilisées dans le portfolio.

Exemple de requête :

```bash
curl http://localhost:4000/api/skills
```

La réponse contient la liste des compétences et leur nombre. L'API retourne actuellement huit catégories de compétences.

<img width="1247" height="822" alt="38" src="https://github.com/user-attachments/assets/463d663e-9f1d-425d-b091-1cecceacf34d" />

---

### 34. Récupération des projets depuis l'API Express

Le composant `Projects.js` du frontend Next.js a été modifié afin de récupérer les projets depuis la route `GET /api/projects`, plutôt que de dépendre uniquement de données locales.

La récupération est réalisée côté serveur à l'aide de `fetch()`. Le composant peut ensuite afficher les projets reçus dans l'interface du portfolio.

Le paramètre `cache: "no-store"` permet de demander les données à l'API à chaque récupération, au lieu de réutiliser une réponse mise en cache.

<img width="1917" height="952" alt="42" src="https://github.com/user-attachments/assets/e492ec87-a239-4946-a13d-573d31ad59e2" />

---

### 35. Récupération des compétences depuis l'API Express

Le composant `Skills.js` a été modifié de la même manière. Il récupère les compétences depuis la route `GET /api/skills`, puis les affiche dans l'interface Next.js.

Cette approche sépare les responsabilités :

- **API Express :** fournit les données.
- **Frontend Next.js :** récupère les données et les présente à l'utilisateur.

Cette séparation facilite la maintenance et permet de réutiliser l'API avec d'autres clients.

<img width="1912" height="966" alt="43" src="https://github.com/user-attachments/assets/fe14058a-44a7-46e5-adbd-7384f7078190" />

---

## IX. Variables d'environnement et configuration

### 36. Configuration de `API_URL`

L'URL de l'API est définie à l'aide de la variable d'environnement `API_URL`.

Dans le fichier `portfolio-nextjs/.env.local`, utilisé pour le développement local :

```env
API_URL=http://localhost:4000
```

Dans Docker Compose, le frontend utilise :

```yaml
environment:
  API_URL: http://api:4000
```

Dans le réseau Docker Compose, `api` correspond au nom du service Express. Les conteneurs peuvent communiquer entre eux en utilisant les noms de leurs services.

L'URL de l'API ne doit pas être codée en dur dans le code source, car elle peut varier selon l'environnement : développement local, conteneurs Docker ou serveur de production. Une variable d'environnement permet de modifier cette configuration sans changer le code de l'application.

**Important :** `localhost` désigne la machine ou le conteneur dans lequel la requête est exécutée. À l'intérieur du conteneur frontend, `localhost:4000` ne désignerait donc pas le conteneur API.

### 37. Création du fichier `.env.example`

Le fichier `portfolio-nextjs/.env.example` fournit un exemple de configuration sans contenir de secret réel.

Contenu :

```env
API_URL=http://localhost:4000
```

Ce fichier permet aux autres développeurs de connaître les variables nécessaires au fonctionnement du projet.

Le fichier `.env.local`, qui contient la configuration utilisée localement, doit rester exclu du dépôt Git. Le fichier `.env.example`, lui, peut être versionné.

---

## X. Dockerisation du frontend et de l'API

### 38. Dockerfile du frontend Next.js

Le fichier `portfolio-nextjs/Dockerfile` permet de construire une image Docker pour le frontend Next.js.

```dockerfile
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

Ce Dockerfile utilise une construction multi-stage :

- **Builder :** installe les dépendances et compile l'application Next.js.
- **Runner :** récupère uniquement les fichiers nécessaires à l'exécution de l'application en production.

L'option `output: "standalone"` dans `next.config.mjs` permet de générer les fichiers nécessaires à ce mode d'exécution.

Le frontend écoute sur le port `3000`.

### 39. Dockerfile de l'API Express

Le fichier `api/Dockerfile` permet de construire une image Docker pour l'API.

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

CMD ["node", "server.js"]
```

Cette image utilise Node.js sur Alpine Linux. Les dépendances de développement ne sont pas installées, ce qui réduit les éléments inutiles dans l'image de production.

L'application Express démarre avec `node server.js` et écoute sur le port `4000`.

### 40. Construction des images Docker

Les deux images peuvent être construites séparément depuis la racine du projet.

Construction de l'image du frontend :

```bash
docker build -t devsecops-portfolio -f portfolio-nextjs/Dockerfile portfolio-nextjs
```

Construction de l'image de l'API :

```bash
docker build -t devsecops-api -f api/Dockerfile api
```

Vérification des images :

```bash
docker images
```

Ces commandes créent les images `devsecops-portfolio` et `devsecops-api`.

### 41. Exécution avec Docker Compose

Le fichier `docker-compose.yml` permet de démarrer le frontend, l'API et le site statique Nginx existant avec une seule commande.

Contenu du fichier :

```yaml
services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: cv-container
    ports:
      - "8081:80"
    restart: unless-stopped

  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    container_name: portfolio-api
    ports:
      - "4000:4000"
    restart: unless-stopped

  frontend:
    build:
      context: ./portfolio-nextjs
      dockerfile: Dockerfile
    container_name: portfolio-frontend
    ports:
      - "3000:3000"
    environment:
      API_URL: http://api:4000
    depends_on:
      - api
    restart: unless-stopped
```

Le service `portfolio` correspond au site statique Nginx existant. Le service `api` exécute l'API Express, et le service `frontend` exécute l'application Next.js.

Docker Compose crée un réseau permettant aux services de communiquer entre eux. Le frontend utilise `http://api:4000` pour joindre l'API sur ce réseau.

Pour construire les images et démarrer les services :

```bash
docker compose build
docker compose up -d
```

Pour vérifier l'état des conteneurs :

```bash
docker compose ps
```

Les trois services doivent être en cours d'exécution.

<img width="1467" height="205" alt="44" src="https://github.com/user-attachments/assets/e5be9301-fb3a-4c67-8ddc-8077a6dda418" />

### 42. Vérification de la communication entre le frontend et l'API

Après le déploiement, les trois services sont accessibles aux adresses suivantes sur le réseau local de la machine virtuelle Ubuntu :

| Service                  | Adresse                                    |
| ------------------------ | ------------------------------------------ |
| Frontend Next.js         | `http://192.168.213.136:3000`              |
| API Express              | `http://192.168.213.136:4000`              |
| API — Health check       | `http://192.168.213.136:4000/api/health`   |
| API — Projets            | `http://192.168.213.136:4000/api/projects` |
| API — Compétences        | `http://192.168.213.136:4000/api/skills`   |
| Portfolio statique Nginx | `http://192.168.213.136:8081`              |

Pour vérifier que l'API répond correctement depuis le poste client :

```powershell
Invoke-RestMethod http://192.168.213.136:4000/api/health
```

La réponse indique que l'API est en bonne santé. La route `/api/projects` retourne cinq projets, tandis que `/api/skills` retourne huit catégories de compétences.

Le frontend Next.js récupère les données depuis l'API à travers le réseau Docker Compose. Les projets et les compétences sont ensuite affichés dans l'interface du portfolio.

<img width="1902" height="942" alt="39" src="https://github.com/user-attachments/assets/7eedd2ee-fa81-4f4b-8c1c-ddf754d684fa" />

<img width="1916" height="945" alt="40" src="https://github.com/user-attachments/assets/428866ae-ff43-4502-965f-b6486cd54c6d" />

<img width="1917" height="972" alt="41" src="https://github.com/user-attachments/assets/124f3461-b7ca-4ee3-a2ca-e308ba765a4f" />

### Résultat

Les étapes 29 à 42 permettent de mettre en place une architecture séparant le frontend et l'API, de configurer les URL avec des variables d'environnement, de créer les images Docker et de déployer les services avec Docker Compose.

Le déploiement a été vérifié sur la machine virtuelle Ubuntu : les trois conteneurs sont actifs, les routes de l'API répondent correctement et le frontend affiche les projets et les compétences récupérés depuis l'API.

## XII. Automatisation du déploiement avec Ansible et Vagrant

### 43. Déploiement du portfolio avec Ansible et Docker Compose

**Objectif :** automatiser l'installation de Docker et le déploiement des services du portfolio à l'aide d'Ansible.

Le playbook `ansible/playbook.yml` effectue les opérations suivantes :

1. Mise à jour du cache des paquets Ubuntu.
2. Installation de Docker et du plugin Docker Compose.
3. Activation et démarrage du service Docker.
4. Construction des images et démarrage des conteneurs avec Docker Compose.

**Exécution du playbook :**

```powershell
vagrant provision
```

**Vérification des conteneurs :**

```powershell
vagrant ssh -c "docker ps"
```

**Vérification de l'API :**

```powershell
Invoke-RestMethod http://localhost:2201/api/health
```

**Résultat obtenu :** l'API retourne le statut `healthy` et les trois services sont déployés.

**Capture d'écran :**

<img width="1235" height="407" alt="46" src="https://github.com/user-attachments/assets/be2e42a6-a28a-49df-b0d9-1e943ee01494" />

### 44. Création automatique de la VM et déploiement

Le fichier `Vagrantfile` automatise la création d'une machine virtuelle Ubuntu 24.04 sous VMware Workstation.

Lors de l'exécution de `vagrant up`, les étapes suivantes sont réalisées automatiquement :

1. Création et démarrage de la machine virtuelle.
2. Configuration du dossier partagé du projet dans `/vagrant`.
3. Installation d'Ansible dans la machine virtuelle via le provisionneur `ansible_local`.
4. Exécution du playbook `ansible/playbook.yml`.
5. Installation de Docker et de Docker Compose.
6. Construction et lancement des services du portfolio.

**Commande d'automatisation :**

```powershell
vagrant up --provider=vmware_desktop
```

**Vérification de l'état de la VM :**

```powershell
vagrant status
```

**Accès aux applications :**

| Service           | URL                              |
| ----------------- | -------------------------------- |
| Portfolio Next.js | http://localhost:2200            |
| API Express       | http://localhost:2201/api/health |
| Portfolio Nginx   | http://localhost:8081            |

Les ports `2200` et `2201` sont attribués automatiquement par Vagrant, car les ports `3000` et `4000` de l'hôte étaient déjà utilisés.

**Capture d'écran :**

<img width="1007" height="212" alt="50" src="https://github.com/user-attachments/assets/545fd55d-5ae5-4e7f-b500-107ca6c4461a" />

<img width="1470" height="687" alt="49" src="https://github.com/user-attachments/assets/f8f3b8cc-c197-426c-96b8-1101665252e2" />

<img width="1912" height="962" alt="47" src="https://github.com/user-attachments/assets/19e2c1fe-15e5-4303-a20b-4eb4b2997e77" />

### 45. Test de recréation complète de la machine virtuelle

**Objectif :** vérifier que l'environnement peut être recréé intégralement à partir du `Vagrantfile` et du playbook Ansible, sans configuration manuelle à l'intérieur de la VM.

**Étape 1 — Destruction de la VM**

```powershell
vagrant destroy
```

Cette commande supprime la machine virtuelle gérée par Vagrant.

<img width="965" height="91" alt="52" src="https://github.com/user-attachments/assets/62dfc764-95ad-480a-86a5-20648ff606ec" />

**Étape 2 — Recréation et provisionnement automatique**

```powershell
vagrant up
```

Vagrant recrée la VM Ubuntu 24.04 et exécute automatiquement le playbook Ansible.

**Étape 3 — Vérification**

```powershell
vagrant status
vagrant port
Invoke-RestMethod http://localhost:2201/api/health
```

Vérifier également l'accès au portfolio dans le navigateur.

**Résultat attendu :** la VM est recréée et les services sont déployés automatiquement sans installation manuelle de Docker ou lancement manuel des conteneurs.

**Captures d'écran :**

<!-- Ajouter ici une capture d'écran de vagrant destroy -f. -->

<img width="1235" height="407" alt="46" src="https://github.com/user-attachments/assets/ab552da9-1b2a-47c7-a49e-4f3df3ffb968" />

**État du test :** à compléter après validation réelle de la destruction et de la recréation.

## Task 48 — Strict API Data Validation with Zod

### Objective

Validate incoming API data on the backend to ensure that requests contain valid fields and values before they are processed.

### Implementation

Installed Zod in the Express API:

```bash
npm install zod
```

Defined a strict schema for the `POST /api/contact` endpoint:

```javascript
const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(3).max(120),
    message: z.string().trim().min(10).max(2000),
  })
  .strict();
```

The API validates requests using `safeParse()`:

```javascript
const result = contactSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    error: {
      code: "INVALID_CONTACT_DATA",
      message: "The contact data is invalid.",
      details: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    },
  });
}
```

The `.strict()` method rejects unexpected fields. The API also limits incoming JSON request bodies to 10 KB.

### Testing

**Test:** Submit invalid contact data.

```powershell
$body = @{
    name = "A"
    email = "not-an-email"
    subject = "Hi"
    message = "Short"
} | ConvertTo-Json

try {
    Invoke-RestMethod `
        -Uri "http://localhost:4000/api/contact" `
        -Method Post `
        -ContentType "application/json" `
        -Body $body
} catch {
    $_.ErrorDetails.Message
}
```

**Observed response:**

```json
{
  "error": {
    "code": "INVALID_CONTACT_DATA",
    "message": "The contact data is invalid.",
    "details": [
      {
        "field": "name",
        "message": "Too small: expected string to have >=2 characters"
      },
      {
        "field": "email",
        "message": "Invalid email address"
      },
      {
        "field": "subject",
        "message": "Too small: expected string to have >=3 characters"
      },
      {
        "field": "message",
        "message": "Too small: expected string to have >=10 characters"
      }
    ]
  }
}
```

The API rejects invalid data with HTTP `400 Bad Request` instead of accepting it.

<img width="767" height="876" alt="55" src="https://github.com/user-attachments/assets/1692ce57-39d8-4c28-9186-cd8283e0a5df" />

---

## Task 49 — Centralized API Error Handling

### Objective

Provide consistent JSON error responses for unknown routes, malformed JSON, oversized request bodies, and unexpected server errors.

### Implementation

Added a 404 handler for requests to nonexistent routes:

```javascript
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found.",
    },
  });
});
```

Added centralized error middleware to handle malformed JSON, oversized payloads, and unexpected errors. Internal server errors return a generic message rather than exposing stack traces to clients.

The middleware handles:

- `400 Bad Request` — malformed JSON.
- `413 Payload Too Large` — JSON body exceeds 10 KB.
- `404 Not Found` — route does not exist.
- `500 Internal Server Error` — unexpected server failure.

### Test 1 — Unknown route

```powershell
try {
    Invoke-RestMethod -Uri "http://localhost:4000/api/unknown"
} catch {
    $_.ErrorDetails.Message
}
```

**Observed response:**

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Route not found."
  }
}
```

### Test 2 — Oversized request body

```powershell
$largeBody = @{
    name = "Test User"
    email = "test@example.com"
    subject = "Testing"
    message = ("x" * 11000)
} | ConvertTo-Json

try {
    Invoke-RestMethod `
        -Uri "http://localhost:4000/api/contact" `
        -Method Post `
        -ContentType "application/json" `
        -Body $largeBody
} catch {
    $_.ErrorDetails.Message
}
```

**Observed response:**

```json
{
  "error": {
    "code": "PAYLOAD_TOO_LARGE",
    "message": "The request body exceeds the allowed size."
  }
}
```

### Test 3 — Malformed JSON

Send an invalid JSON request body:

```powershell
try {
    Invoke-RestMethod `
        -Uri "http://localhost:4000/api/contact" `
        -Method Post `
        -ContentType "application/json" `
        -Body '{"name":'
} catch {
    $_.ErrorDetails.Message
}
```

Expected error code: `INVALID_JSON`, with HTTP `400 Bad Request`. Run this test to capture its actual output before marking it as verified.

<img width="1301" height="262" alt="56" src="https://github.com/user-attachments/assets/232c6172-6ded-460b-b826-c32632dbabc9" />

---

## Task 50 — HTTP Security Headers with Helmet

### Objective

Improve the security of HTTP responses by adding commonly recommended security headers to the Express API.

### Implementation

Installed Helmet:

```bash
npm install helmet
```

Enabled the middleware before the API routes:

```javascript
const helmet = require("helmet");

app.use(helmet());
app.use(express.json({ limit: "10kb" }));
```

Helmet configures headers that help protect against certain browser-based attacks and insecure resource loading.

### Testing

Used `curl.exe` to inspect the response headers:

```powershell
curl.exe -I http://localhost:4000/api/health
```

**Observed output — selected headers:**

```http
HTTP/1.1 200 OK
Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
Origin-Agent-Cluster: ?1
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
```

Other headers were also present, including `X-DNS-Prefetch-Control`, `X-Download-Options`, and `X-Permitted-Cross-Domain-Policies`.

### Results

- The health endpoint returned HTTP `200 OK`.
- Helmet added security-related response headers.
- `X-Content-Type-Options: nosniff` helps prevent MIME-type sniffing.
- `X-Frame-Options: SAMEORIGIN` restricts cross-origin framing.
- `Content-Security-Policy` defines restrictions on resource loading.

**Deployment note:** These tests were performed over local HTTP. The `Strict-Transport-Security` header does not itself enable HTTPS. A public deployment should use properly configured HTTPS at the reverse proxy or web server.

<img width="1461" height="561" alt="57" src="https://github.com/user-attachments/assets/dfdd0196-6070-49f2-9e17-92bd0f2c731f" />

---

## Task 51 — Rate Limiting on Sensitive API Routes

### Objective

Reduce repeated submissions and automated abuse of the public contact endpoint.

### Implementation

Installed `express-rate-limit`:

```bash
npm install express-rate-limit
```

Configured a rate limiter:

```javascript
const { rateLimit } = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: {
      code: "RATE_LIMITED",
      message: "Too many contact submissions. Please try again later.",
    },
  },
});
```

Applied the limiter to the contact route:

```javascript
app.post("/api/contact", contactLimiter, (req, res) => {
  // Zod validation and contact request handling
});
```

The limit is five requests per client IP address within a 15-minute window. Other routes, such as `/api/health`, do not consume this contact-specific limit.

### Testing

Sent repeated valid requests to the contact endpoint. The request body was:

```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    subject = "Rate limit test"
    message = "Testing contact rate limiting."
} | ConvertTo-Json
```

The observed results were:

```text
Request 1 : HTTP 201
Request 2 : HTTP 429
Request 3 : HTTP 429
Request 4 : HTTP 429
Request 5 : HTTP 429
Request 6 : HTTP 429
```

The first request succeeded. Subsequent requests were rejected because the client IP had likely already consumed most or all of the rate limit during earlier tests.

**Observed rate-limit response:**

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many contact submissions. Please try again later."
  }
}
```

HTTP `429 Too Many Requests` indicates that the client has exceeded the configured rate limit.

### Limitations

The current configuration uses an in-memory store. Its counters reset when the API restarts, and separate API instances do not share counters. A production deployment with multiple instances should use a shared store, such as Redis.

<img width="1367" height="647" alt="58" src="https://github.com/user-attachments/assets/97b1e420-be1f-4d9d-8cb0-95229ec2edb6" />

---

## Summary — Tasks 48–51

| Task | Security improvement              | Verification                                         |
| ---- | --------------------------------- | ---------------------------------------------------- |
| 48   | Strict input validation with Zod  | Invalid contact data rejected with HTTP 400          |
| 49   | Centralized JSON error handling   | HTTP 404 and HTTP 413 responses verified             |
| 50   | HTTP security headers with Helmet | `curl.exe -I` returned HTTP 200 and security headers |
| 51   | Contact endpoint rate limiting    | HTTP 429 response verified                           |

These improvements strengthen the API's input validation, error handling, HTTP response security, and protection against repeated contact submissions. They are important security controls, but they do not replace a full security audit or additional protections required for a production deployment.

## Task 52 — OWASP API Security Top 10 Assessment

This assessment uses the OWASP API Security Top 10 (2023) to identify
security risks relevant to the DevSecOps Portfolio API.

Official reference:
https://api-security.owasp.org/editions/2023/en/0x11-t10/

| OWASP Risk                                            | Relevance to This API                                                             | Mitigation and Status                                                                                                                                                           |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API1: Broken Object Level Authorization               | No user-owned resources or object IDs are currently exposed.                      | Not currently applicable. Add ownership checks if private resources are introduced.                                                                                             |
| API2: Broken Authentication                           | The current API has no authentication system. Its portfolio endpoints are public. | No login is currently required. Implement and test authentication before introducing private user data or protected operations.                                                 |
| API3: Broken Object Property Level Authorization      | Unexpected contact fields could be submitted.                                     | Implemented: Zod validates allowed fields and `.strict()` rejects unknown properties. This does not replace authorization checks if private objects are added.                  |
| API4: Unrestricted Resource Consumption               | Repeated requests and oversized JSON bodies can consume resources.                | Implemented: a 10 KB JSON body limit and a contact rate limit of 5 requests per IP per 15-minute window. Consider a shared rate-limit store for multiple instances.             |
| API5: Broken Function Level Authorization             | The current routes are public and there are no administrative routes.             | No admin functions are currently exposed. Enforce role-based authorization before adding privileged endpoints.                                                                  |
| API6: Unrestricted Access to Sensitive Business Flows | Automated submissions could abuse the contact form.                               | Implemented: contact endpoint rate limiting. Consider additional anti-automation measures if abuse becomes a concern.                                                           |
| API7: Server Side Request Forgery (SSRF)              | The API does not currently fetch URLs supplied by users.                          | Not currently applicable. Validate and restrict destinations if user-controlled URL fetching is introduced.                                                                     |
| API8: Security Misconfiguration                       | Insecure HTTP headers and error details can increase exposure.                    | Implemented: Helmet security headers and centralized JSON error responses. Public deployment should also use HTTPS and appropriate proxy configuration.                         |
| API9: Improper Inventory Management                   | Undocumented or forgotten routes can increase the attack surface.                 | Document the API routes and maintain an inventory of endpoints. Review and remove obsolete or debug routes.                                                                     |
| API10: Unsafe Consumption of APIs                     | The Next.js frontend proxy communicates with the Express API.                     | Implemented: the proxy uses a configured internal service URL and returns a controlled error when the backend is unavailable. Validate responses from any future external APIs. |

### Conclusion

Tasks 48–51 introduced input validation, centralized error handling,
HTTP security headers, request-size limits, and contact-endpoint rate
limiting. These controls reduce several risks, but they do not constitute
a complete security audit or eliminate all OWASP API risks.

Further work should include dependency maintenance, automated security
testing, HTTPS configuration, and authorization controls if private
resources or administrative features are introduced.

### 53. Ajout du service PostgreSQL avec Docker Compose

Le service `postgres` utilise l'image `postgres:17-alpine` et crée la base de données `portfolio`. Un volume nommé `postgres_data` assure la persistance des données, tandis qu'un contrôle de santé (`healthcheck`) vérifie que PostgreSQL est prêt à accepter les connexions.

L'API Express dépend de l'état de santé du service PostgreSQL afin de démarrer après la disponibilité de la base de données.

**Vérification des services :**

```powershell
docker compose ps
```

**Résultat observé :** les quatre services (`portfolio`, `api`, `frontend` et `postgres`) sont démarrés. Le service PostgreSQL apparaît avec l'état `healthy`.

**Capture d'écran :** résultat de `docker compose ps` montrant les quatre services actifs et PostgreSQL en état `healthy`.

# 13. Base de données : formulaire Contact et migrations Prisma

## 54. Enregistrement des messages du formulaire Contact dans PostgreSQL

L'API Express permet d'enregistrer les messages envoyés depuis le formulaire Contact dans la base de données PostgreSQL. Les données sont persistées afin de pouvoir être consultées ultérieurement.

Le flux de traitement est le suivant :

1. L'utilisateur remplit le formulaire Contact dans le frontend Next.js.
2. Le frontend envoie une requête HTTP à l'API Express.
3. L'API valide les données reçues.
4. Prisma enregistre le message dans PostgreSQL.
5. L'API renvoie une réponse indiquant le résultat de l'opération.

**Vérification des données enregistrées :**

Les messages peuvent être consultés dans la table PostgreSQL correspondante.

**Capture d'écran — Messages enregistrés dans PostgreSQL :**

<!-- Ajouter ici la capture d'écran des données enregistrées dans la table Contact. -->

![Messages Contact enregistrés dans PostgreSQL](docs/screenshots/contact-postgresql.png)

## 55. Migrations de base de données avec Prisma

Prisma Migrate permet de gérer l'évolution du schéma de la base de données à l'aide de migrations versionnées.

Les migrations permettent de reproduire les changements de structure de la base de données entre les environnements de développement, de test et de production.

### Commandes utilisées

Créer une migration en développement :

```bash
npx prisma migrate dev --name nom_de_la_migration
```

Appliquer les migrations existantes dans un environnement de déploiement :

```bash
npx prisma migrate deploy
```

Générer le client Prisma :

```bash
npx prisma generate
```

Les fichiers de migration sont conservés dans le répertoire `prisma/migrations/`.

**Capture d'écran — Migrations Prisma :**

<!-- Ajouter ici une capture montrant les migrations créées ou appliquées. -->

![Migrations Prisma](docs/screenshots/prisma-migrations.png)

## 56. Variables de connexion dans `.env.example`

Le fichier `.env.example` documente les variables nécessaires à la connexion à PostgreSQL, sans contenir de véritables identifiants.

Exemple :

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/portfolio?schema=public"
```

Pour un environnement Docker Compose, l'hôte de connexion doit correspondre au nom du service PostgreSQL lorsque l'API et la base de données sont dans le même réseau Docker.

Les valeurs réelles sont définies dans le fichier `.env` ou dans les variables d'environnement du système. Le fichier `.env` contenant des secrets ne doit pas être versionné.

---

# 14. Tests applicatifs

## 57. Tests automatisés du frontend Next.js

Des tests automatisés sont utilisés pour vérifier le comportement du frontend Next.js et détecter les régressions lors des modifications du code.

### Commande utilisée

```bash
cd portfolio-nextjs
npm test
```

> Utiliser la commande correspondant au script de test défini dans `portfolio-nextjs/package.json`, par exemple `npm run test` si c'est le nom du script configuré.

**Résultat des tests frontend :**

<!-- Ajouter ici une capture d'écran montrant les tests frontend réussis. -->

![Tests frontend réussis](docs/screenshots/frontend-tests.png)

## 58. Tests automatisés d'une route de l'API Express

Des tests automatisés vérifient le comportement d'une route de l'API Express, notamment les codes HTTP retournés et la structure des réponses.

### Commande utilisée

```bash
cd api
npm test
```

Ces tests permettent de vérifier que la route fonctionne conformément au comportement attendu.

**Résultat des tests API :**

<!-- Ajouter ici une capture d'écran montrant les tests API réussis. -->

![Tests API réussis](docs/screenshots/api-tests.png)

## 59. Tests de sécurité des entrées

Des tests complémentaires vérifient le comportement de l'API face à des entrées invalides ou malformées et à des tentatives d'injection.

Les cas testés comprennent notamment :

- Champs obligatoires absents.
- Types de données incorrects.
- Formats de données invalides.
- Corps de requête JSON malformé.
- Entrées contenant des caractères ou expressions pouvant être utilisés dans une tentative d'injection.
- Requêtes ne respectant pas le schéma attendu.

L'objectif est de vérifier que l'API rejette les requêtes non valides avec des réponses HTTP appropriées et ne révèle pas d'informations internes sensibles.

Les tests d'injection vérifient également que les données sont traitées comme des valeurs et non comme du code SQL exécutable.

### Commande utilisée

```bash
cd api
npm test
```

**Résultats des tests de sécurité :**

<!-- Ajouter ici une capture d'écran des résultats des tests portant sur les entrées invalides et les requêtes malformées. -->

![Tests de sécurité réussis](docs/screenshots/security-tests.png)

## 60. Tests d'intégration : frontend → API → PostgreSQL

Les tests d'intégration vérifient la communication entre les différentes couches de l'application.

Chaîne vérifiée :

```text
Frontend Next.js
       |
       | Requête HTTP
       v
API Express
       |
       | Requête Prisma
       v
PostgreSQL
```

Le test vérifie que les données envoyées depuis le frontend atteignent l'API, sont traitées correctement et peuvent être enregistrées dans PostgreSQL.

### Étapes de vérification

1. Démarrer les services nécessaires.
2. Envoyer les données depuis le formulaire Contact.
3. Vérifier la réponse HTTP de l'API.
4. Vérifier que le message a été enregistré dans PostgreSQL.

### Commandes utilisées

Exécuter les tests d'intégration à l'aide du script défini dans le projet :

```bash
npm test
```

Pour vérifier directement les données dans PostgreSQL, utiliser le client PostgreSQL ou un outil d'administration de base de données.

**Résultat des tests d'intégration :**

<!-- Ajouter ici une capture d'écran montrant le test réussi et/ou les données enregistrées dans PostgreSQL. -->

![Tests d'intégration réussis](docs/screenshots/integration-tests.png)

---

# 15. Jenkins : tests et images Docker

## 61. Exécution automatique des tests dans Jenkins

Le pipeline Jenkins automatise l'exécution des tests frontend et API afin de détecter les erreurs avant la construction des images Docker.

Les étapes correspondantes sont :

- Exécution des tests frontend Next.js.
- Exécution des tests de l'API Express.

Si une étape échoue, le pipeline signale l'échec et empêche normalement les étapes suivantes de s'exécuter.

**Capture d'écran — Stages de tests Jenkins :**

<!-- Ajouter ici une capture d'écran de Jenkins montrant les stages de tests. -->

![Stages de tests Jenkins](docs/screenshots/jenkins-tests.png)

## 62. Construction automatique des images Docker

Le pipeline construit automatiquement les deux images de l'application :

- `devsecops-portfolio` : image du frontend Next.js.
- `devsecops-api` : image de l'API Express.

Les images sont construites à partir des Dockerfiles présents dans le dépôt.

Exemple de commandes Docker :

```bash
docker build -t devsecops-portfolio:latest ./portfolio-nextjs
docker build -t devsecops-api:latest ./api
```

Dans Jenkins, la construction est intégrée au pipeline et s'exécute automatiquement après les étapes précédentes.

**Capture d'écran — Construction des images Docker :**

<!-- Ajouter ici une capture d'écran du stage de construction des images. -->

![Construction des images Docker](docs/screenshots/jenkins-docker-build.png)

## 63. Tag des images Docker avec le Git SHA

Le pipeline utilise une version courte du SHA du commit Git pour identifier les images construites.

Ce mécanisme permet de relier chaque image à une version précise du code source.

Exemple :

```text
devsecops-portfolio:a1b2c3d
devsecops-api:a1b2c3d
```

`a1b2c3d` est un exemple de SHA court ; la valeur réelle dépend du commit utilisé lors de l'exécution du pipeline.

### Vérification des images générées

```bash
docker image ls devsecops-portfolio
docker image ls devsecops-api
```

**Capture d'écran — Images taguées avec le Git SHA :**

<!-- Ajouter ici une capture d'écran montrant les images et leurs tags. -->

![Images Docker taguées avec Git SHA](docs/screenshots/docker-git-sha-tags.png)

---

# 16. Pipeline DevSecOps Jenkins

## 64. Analyse des secrets avec Gitleaks

Gitleaks est intégré au pipeline Jenkins afin de rechercher les secrets qui auraient été accidentellement ajoutés au dépôt Git.

L'analyse vise notamment les éléments suivants :

- Clés API.
- Tokens d'accès.
- Mots de passe codés en dur.
- Autres chaînes pouvant correspondre à des secrets.

L'objectif est de détecter les secrets avant la livraison des images Docker.

**Résultat attendu :** le stage réussit lorsque l'analyse ne détecte aucun secret bloquant.

**Capture d'écran — Gitleaks :**

<!-- Ajouter ici une capture d'écran du stage Gitleaks. -->

![Analyse Gitleaks](docs/screenshots/gitleaks-scan.png)

## 65. Analyse statique du code avec Semgrep (SAST)

Semgrep est utilisé pour analyser statiquement le code source du frontend et du backend.

Cette analyse recherche des motifs de code pouvant présenter des risques de sécurité ou des erreurs de programmation.

Elle complète les tests fonctionnels en examinant le code sans nécessiter son exécution.

**Capture d'écran — Analyse Semgrep :**

<!-- Ajouter ici une capture d'écran du stage Semgrep et de son résultat. -->

![Analyse Semgrep](docs/screenshots/semgrep-scan.png)

## 66. Contrôle des dépendances Node.js avec npm audit

Le pipeline utilise `npm audit` pour rechercher les vulnérabilités connues dans les dépendances Node.js.

L'analyse s'appuie sur les informations de vulnérabilité disponibles pour les packages installés.

### Commande utilisée

```bash
npm audit
```

La commande doit être exécutée dans le répertoire du service concerné, selon la configuration du pipeline.

Les vulnérabilités détectées sont examinées afin de déterminer les mises à jour ou corrections nécessaires.

**Capture d'écran — npm audit :**

<!-- Ajouter ici une capture d'écran du résultat npm audit. -->

![Résultat npm audit](docs/screenshots/npm-audit.png)

## 67. Analyse des dépendances avec OWASP Dependency-Check

OWASP Dependency-Check complète l'analyse des dépendances en identifiant les composants logiciels susceptibles de présenter des vulnérabilités connues.

L'outil compare les composants détectés aux informations de vulnérabilité disponibles, notamment celles associées aux identifiants CVE.

Cette analyse complète `npm audit` et les autres contrôles de sécurité du pipeline.

### Exemple de vulnérabilité détectée

Lorsqu'une dépendance vulnérable est identifiée, le rapport peut présenter :

- Le nom du composant concerné.
- Sa version.
- L'identifiant CVE associé, lorsqu'il est disponible.
- La sévérité de la vulnérabilité.
- Des informations permettant d'identifier une version corrigée.

L'exemple réel doit être repris du rapport produit par l'analyse du projet. Il ne faut pas utiliser un CVE fictif comme preuve d'une détection effective.

**Capture d'écran — Rapport OWASP Dependency-Check :**

<!-- Ajouter ici une capture d'écran montrant une dépendance vulnérable réellement détectée, avec son identifiant CVE et sa sévérité. -->

![Rapport OWASP Dependency-Check](docs/screenshots/owasp-dependency-check.png)

## 68. Analyse de sécurité des images Docker avec Trivy

Trivy est intégré au pipeline Jenkins afin d'analyser les images Docker construites.

L'analyse recherche les vulnérabilités connues dans les composants du système d'exploitation et les dépendances logicielles détectables.

Les deux images analysées sont :

```text
devsecops-portfolio:<GIT_SHA>
devsecops-api:<GIT_SHA>
```

### Commandes de scan

Exemple pour le frontend :

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v trivy-cache:/root/.cache/ \
  aquasec/trivy:latest \
  image --scanners vuln \
  --severity HIGH,CRITICAL \
  --exit-code 1 \
  "devsecops-portfolio:${GIT_SHA}"
```

Exemple pour l'API :

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v trivy-cache:/root/.cache/ \
  aquasec/trivy:latest \
  image --scanners vuln \
  --severity HIGH,CRITICAL \
  --exit-code 1 \
  "devsecops-api:${GIT_SHA}"
```

### Seuil de sécurité

Les paramètres `--severity HIGH,CRITICAL` ciblent les vulnérabilités de sévérité élevée et critique.

Le paramètre `--exit-code 1` fait échouer la commande si des vulnérabilités correspondant au seuil configuré sont détectées.

Lors de la vérification manuelle des images corrigées, les deux scans ont réussi avec un code de sortie `0`, sans vulnérabilités HIGH ou CRITICAL détectées.

**Capture d'écran — Scan Trivy du frontend :**

<!-- Ajouter ici une capture d'écran du rapport Trivy frontend. -->

![Scan Trivy frontend](docs/screenshots/trivy-frontend.png)

**Capture d'écran — Scan Trivy de l'API :**

<!-- Ajouter ici une capture d'écran du rapport Trivy API. -->

![Scan Trivy API](docs/screenshots/trivy-api.png)

---

# Conclusion

Les tâches 54 à 68 couvrent la persistance des données du formulaire Contact, les migrations Prisma, les tests applicatifs et d'intégration, la construction automatisée des images Docker ainsi que plusieurs contrôles de sécurité intégrés à Jenkins.

Le pipeline combine des tests, l'analyse des secrets, l'analyse statique du code, le contrôle des dépendances et le scan des images Docker. Les captures d'écran ajoutées à ce document servent à illustrer les résultats effectivement obtenus lors de l'exécution du projet.
