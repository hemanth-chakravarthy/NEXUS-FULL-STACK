# NEXUS

> **Empowering Students Success: Navigate, Collaborate, Get Hired.**

NEXUS is a comprehensive full-stack web platform designed to empower students by providing a collaborative space where they can connect, collaborate on projects, and discover career opportunities. The platform combines social features with professional networking to help students build their portfolios and careers.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [API Routes](#-api-routes)
- [Database Models](#-database-models)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Student Collaboration
- **Create & Share Posts**: Share project ideas, updates, and achievements
- **Collaboration Requests**: Send and receive collaboration proposals
- **Comments & Engagement**: Interact with other students' posts through comments
- **Notifications**: Real-time notifications for interactions and updates

### Professional Networking
- **Hiring Board**: Browse and post job opportunities for students
- **Student Profiles**: Showcase skills, projects, and experience
- **Interested Applications**: Apply for hiring opportunities
- **Saved Students**: Save interesting student profiles for future reference

### Communication
- **Real-time Messaging**: Chat with other students using Socket.IO
- **Message History**: Keep track of all conversations

### Search & Discovery
- **Search Functionality**: Find students, projects, and opportunities
- **Student Discovery**: Browse available students and their profiles

### Admin Dashboard
- **Management Panel**: Administrators can manage posts, users, and platform content

## 🛠 Tech Stack

### Frontend
- **EJS** - Templating engine for dynamic HTML rendering
- **CSS** - Responsive styling
- **JavaScript** - Client-side interactivity
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling)
- **Socket.IO** - Real-time bidirectional communication
- **Bcryptjs** - Password hashing and encryption
- **Multer** - File upload handling
- **Express Session** - Session management
- **MongoDB Session Store** - Persistent session storage

### Development Tools
- **Nodemon** - Automatic server restart during development
- **TypeScript** - Type checking (optional)

## 📁 Project Structure

```
NEXUS/
├── controllers/          # Request handlers and business logic
│   ├── adminDashBoardController.js
│   ├── collabPostController.js
│   ├── commentsController.js
│   ├── createPostController.js
│   ├── editProfileController.js
│   ├── hiredCardsController.js
│   ├── hireStudentCardController.js
│   ├── interestedFormController.js
│   ├── messageUserController.js
│   ├── notificationsCardController.js
│   ├── projectPostController.js
│   ├── recievedCollabPostController.js
│   ├── savedStudentsCardController.js
│   ├── searchpageController.js
│   ├── sentCollabPostController.js
│   └── studentHomePageController.js
│
├── models/              # Database schemas and models
│   ├── adminModel.js
│   ├── chatModel.js
│   ├── chatUserModel.js
│   ├── collabPostModels.js
│   ├── commentModels.js
│   ├── createPostModels.js
│   ├── editProfileModels.js
│   ├── hiredCardModels.js
│   ├── hireStudentCardModels.js
│   ├── interestedFormModels.js
│   ├── notificationCardModels.js
│   ├── profileModel.js
│   ├── projectPostModel.js
│   ├── projectPostUserModel.js
│   ├── recievedCollabPostModels.js
│   ├── savedStudentCardModels.js
│   ├── sentCollabPostModels.js
│   └── studentLoginModel.js
│
├── views/               # EJS templates for rendering pages
│   ├── adminDashBoard.ejs
│   ├── adminLogin.ejs
│   ├── collabPage.ejs
│   ├── hirePage.ejs
│   ├── landingPage.ejs
│   ├── loginPage.ejs
│   ├── messagePage.ejs
│   ├── notificationPage.ejs
│   ├── postPage.ejs
│   ├── profilePage.ejs
│   ├── searchpage.ejs
│   └── studentHomePage.ejs
│
├── public/              # Static assets
│   ├── assets/          # Images
│   │   ├── coffee-img.avif
│   │   ├── colab-img.avif
│   │   ├── hello.avif
│   │   ├── hero-img.avif
│   │   ├── login-bg.avif
│   │   ├── nice-architecture.avif
│   │   ├── save-bg.avif
│   │   └── save-post-bg.avif
│   ├── css/             # Stylesheets
│   ├── js/              # Client-side JavaScript
│   ├── uploads/         # User uploads (images)
│   └── uploadsPdf/      # Document uploads (PDFs)
│
├── src/
│   └── index.js         # Application entry point
│
├── package.json         # Project dependencies and metadata
├── README.md            # This file
└── .gitignore          # Git ignore rules (if applicable)
```

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (running locally or via connection string)
- **npm** (Node Package Manager)

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd NEXUS
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB Connection**
   - Ensure MongoDB is running on `mongodb://localhost:27017`
   - Or update the connection string in [src/index.js](src/index.js) to your MongoDB instance

4. **Start the Development Server**
   ```bash
   npm start
   ```
   Or with Nodemon for auto-reload:
   ```bash
   npx nodemon src/index.js
   ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000` (or your configured port)

## 📖 Usage

### User Registration & Login
1. Navigate to the login page
2. Create a new account or sign in with existing credentials
3. Passwords are securely hashed using bcryptjs

### Creating Posts
1. Go to your home page dashboard
2. Click "Create Post" to share project ideas or updates
3. Add title, description, and relevant tags

### Collaboration
1. Browse other students' posts
2. Send collaboration requests to interested students
3. Manage received collaboration proposals

### Hiring Features
1. View the hiring board for job opportunities
2. Submit applications to positions
3. Browse student profiles and save interesting candidates

### Real-time Messaging
1. Access the messaging page
2. Select a student to chat with
3. Messages are delivered in real-time using Socket.IO

### Admin Features
1. Login as administrator
2. Access the admin dashboard to manage content, users, and platform settings

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory (if needed):
```
MONGODB_URI=mongodb://localhost:27017/NEXUS
PORT=3000
SESSION_SECRET=your-session-secret
```

### Database Connection
- Edit [src/index.js](src/index.js) line ~14 to configure MongoDB connection
- Current default: `mongodb://localhost:27017/NEXUS`

### File Uploads
- Profile images: Stored in `public/uploads/`
- PDF documents: Stored in `public/uploadsPdf/`
- Configuration: See Multer setup in [src/index.js](src/index.js)

## 🔌 API Routes

The application handles the following main routes:

| Feature | Controller | Description |
|---------|-----------|-------------|
| Posts | createPostController | Create, view, and manage posts |
| Profiles | editProfileController | Edit student profiles |
| Collaboration | collabPostController | Send/receive collab requests |
| Comments | commentsController | Add comments to posts |
| Hiring | hireStudentCardController | Post job opportunities |
| Applications | interestedFormController | Submit applications |
| Messages | messageUserController | Send messages |
| Notifications | notificationsCardController | Manage notifications |
| Admin | adminDashBoardController | Admin management panel |

## 💾 Database Models

The application uses Mongoose schemas for the following entities:

- **Student** - Student user accounts and profiles
- **Post** - Project and idea posts
- **CollaborationPost** - Collaboration requests
- **Comment** - Comments on posts
- **Message** - Chat messages between users
- **HireCard** - Job postings
- **InterestedForm** - Job applications
- **Notification** - User notifications
- **SavedStudent** - Saved student profiles
- **Admin** - Administrator accounts

## 🤝 Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "Add your feature description"
   ```

3. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**NEXUS** - Empowering Students Success: Navigate, Collaborate, Get Hired.
