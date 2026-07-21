# 🌿 KeenKeeper


### 📌 Project Overview
**KeenKeeper** is a personal relationship management tool designed to help users track, organize, and analyze their interactions with friends to keep meaningful connections alive.

---

### 🛠️ Technologies Used
* **Frontend Library:** React.js (Vite)
* **Styling & UI:** Tailwind CSS & DaisyUI
* **Icons & Visuals:** Lucide React (`lucide-react`) & Recharts
* **State Management & Persistence:** React Context API & Browser `localStorage`
* **User Feedback:** React Toastify (`react-toastify`)

---

### ✨ Key Features

1. **📱 Multi-Channel Check-In Tracking**  
   Log and classify interactions with friends across multiple channels—including Calls, Texts, and Video chats—in just a click.

2. **📊 Visual Friendship Analytics**  
   Gain clear insights into your connection habits using interactive, real-time donut charts that break down your interaction history by type.

3. **⏳ Dynamic Timeline & Smart Filtering**  
   Browse a clean, chronological history of past check-ins with fast drop-down filtering by interaction type and seamless persistent storage.

## 📂 Project Structure

```text
keen-keeper/
├── public/
│   └── friendsData.json   # Mock/Initial dataset
└── src/
    ├── assets/            # Static assets (images, icons, svgs)
    ├── context/           # FriendContext for state & LocalStorage sync
    ├── features/          # Feature-based components & logic
    │   ├── components/    # Feature-specific components
    │   ├── errorPage/     # Custom error page view
    │   ├── homePage/      # Home page feature components
    │   └── pages/         # Primary feature views
    ├── layout/            # Root layout (Navbar, Footer, Main container)
    ├── routes/            # React Router setup & route definitions
    ├── shared/            # Shared reusable UI elements
    ├── utils/             # Helper utilities (localDB functions)
    ├── index.css          # Global Tailwind CSS styles
    └── main.jsx           # App entry point