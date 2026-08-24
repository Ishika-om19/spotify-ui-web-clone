🎵 Spotify Clone

🌐 **Live Demo:** [Open Spotify Clone](https://spotify-ui-web-clone.onrender.com/)

A Spotify-inspired web application built using HTML, CSS, JavaScript, Node.js, Express.js, and EJS.

📌 About the Project

Spotify Clone is a full-stack web development project created to practice frontend development and backend integration using Node.js and Express.js.

The project recreates the basic structure and user flow of a Spotify-inspired application with separate pages for users before login, login, and after login.

The application also includes logout functionality that allows the user to return to the previous page.

> ⚠️ This project is created for learning and educational purposes and is not affiliated with Spotify.

✨ Features

- 🏠 Before-login page
- 🔐 Login page
- 🎵 Spotify-inspired dashboard
- 🚪 Logout functionality
- 🔄 Navigation between pages
- 📄 Separate pages for different user states
- ⚡ Express.js backend
- 🧩 EJS templating
- 📁 Static asset management
- 🌐 Deployed live using Render

 
 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- EJS
- Git
- GitHub
- Render


🏗️ Project Architecture

The application follows a simple client-server architecture.

```text
                    USER
                      │
                      ▼
              ┌───────────────┐
              │    Browser    │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │   Express.js  │
              │    Server     │
              └───────┬───────┘
                      │
              ┌───────┴───────┐
              ▼               ▼
        ┌──────────┐    ┌──────────┐
        │   EJS    │    │  Static  │
        │ Templates│    │  Assets  │
        └────┬─────┘    └──────────┘
             │
             ▼
        Rendered Pages

🔄 How the Application Works

The basic user flow is:

User
  ↓
Before Login Page
  ↓
Login Page
  ↓
Login Request
  ↓
Express.js Route
  ↓
After Login Dashboard
  ↓
Logout
  ↓
Before Login Page


Page Flow :

1. Before Login
The user first sees the landing/before-login page.

2. Login
The user can navigate to the login page.

3. After Login
After successful login, the user is taken to the dashboard page.

4. Logout
The logout option allows the user to return to the before-login page.


🚀 How to Run the Project Locally:

1. Clone the repository
git clone https://github.com/Ishika-om19/spotify-ui-web-clone.git
2. Navigate to the project
cd spotify-ui-web-clone
3. Install dependencies
npm install
4. Start the server
node app.js
5. Open the application
Open the local URL displayed by the server in your browser.


📚 What I Learned:
1. While building this project, I practiced:
2. Creating webpages using HTML and CSS
3. Designing a Spotify-inspired user interface
4. Working with JavaScript
5. Creating a Node.js server
6. Using Express.js for routing
7. Working with EJS templates
8. Serving static files using Express.js
9. Implementing login and logout flow
10. Organizing a web project
11. Using Git and GitHub
12. Deploying a Node.js application
13. Working with Render for deployment


📊 Project Status:
🟢 Basic version completed
The current version includes the main UI, login/logout flow, and deployment.
🌐 Live Demo:
Open Spotify Clone⁠�
🚧 Additional features can be added in future versions.

👩‍💻 Author
Ishika
GitHub: Ishika-om19⁠�
