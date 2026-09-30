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

---

