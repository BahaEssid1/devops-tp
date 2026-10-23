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

JavaScript for interactive theme switching.
---

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
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── projects/
│       ├── page.js
│       └── [slug]/
│           └── page.js
├── components/
│   ├── Header.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Contact.js
│   └── Footer.js
├── data/
│   ├── skills.js
│   └── projects.js
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

| Stage | Description | Result |
|---|---|---|
| Checkout | Retrieves the repository from GitHub | SUCCESS |
| Install Dependencies | Installs Next.js dependencies using `npm ci` | SUCCESS |
| Build Next.js | Builds the application using `npm run build` | SUCCESS |

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




