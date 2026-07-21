# 🌿 KeenKeeper

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a modern React application designed to help you track, organize, and analyze your interactions with friends. Whether it's a quick text, a phone call, or a video catch-up, KeenKeeper keeps your timeline organized and provides visual insights into your relationship habits.

---

## ✨ Features

* **📱 Multi-Channel Check-Ins:** Track interactions via Call, Text, or Video.
* **⏳ Interaction Timeline:** View your complete history of check-ins with quick drop-down filtering (Call, Text, Video, or All).
* **📊 Friendship Analytics:** Interactive donut charts powered by Recharts to visualize your interaction balance.
* **💾 Local Persistence:** Automatically saves your history to LocalStorage so your data stays on your device.
* **⚡ Smooth UX & Feedback:** Real-time toast notifications powered by `react-toastify` and elegant loading states using DaisyUI.
* **🎨 Fully Responsive:** Crafted with Tailwind CSS and DaisyUI for a seamless experience on both desktop and mobile.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite / CRA)
* **Styling:** Tailwind CSS + DaisyUI
* **Icons:** Lucide React (`lucide-react`)
* **Data Visualization:** Recharts
* **Notifications:** React Toastify (`react-toastify`)
* **State Management:** React Context API

---

## 📂 Project Structure

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