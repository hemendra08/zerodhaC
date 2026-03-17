# Zerodha Clone

This repository contains a clone of the Zerodha trading platform. The project is split into distinct components: a primary **Frontend** application for the landing page/public site, a **Dashboard** application for the trading interface, and a **Backend** service.

This README provides an overview of the frontend and dashboard components, how they work, and instructions to get them up and running locally.

---

## 🖥️ Frontend

The `frontend` application serves as the main entry point for users, typical of the main landing or marketing pages of the platform.

### How it works
- It is a **React 18** application scaffolded with Create React App.
- It leverages **React Router DOM (v7)** to handle seamless, single-page routing between different informational pages.
- Focuses on user-interface, responsiveness, and presenting the platform to new users.

### Installation
To install the dependencies for the frontend, open your terminal, navigate to the `frontend` directory, and run:

```bash
cd frontend
npm install
```

### Running the Frontend
To start the development server:
```bash
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

---

## 📊 Dashboard

The `dashboard` application handles the core functionality of the trading platform. This is the protected area where users view charts, track their portfolio, and perform trading activities.

### How it works
- Also built with **React 18**.
- **UI & Styling:** Uses **Material UI (MUI)** alongside **Emotion** for a sleek, modern, and highly customizable user interface and icon set (`@mui/icons-material`).
- **Charting Engine:** Integrates **Chart.js** via **react-chartjs-2** to render real-time interactive financial charts and data visualizations.
- **API Communication:** Uses **Axios** to communicate data securely with the backend APIs.
- Routing is handled by **React Router DOM (v6)**.

### Installation
To install the dependencies for the dashboard, open a terminal window, navigate to the `dashboard` directory, and run:

```bash
cd dashboard
npm install
```

### Running the Dashboard
To start the development server:
```bash
npm start
```
If your frontend application is already running on port `3000`, the terminal will automatically ask you if you'd like to start the dashboard on a different port (typically `[http://localhost:3001](http://localhost:3001)`). Type `Y` to accept.

---

## 🚀 Working with Both Applications

To develop or test the whole platform locally, you need to run both applications concurrently in separate terminal instances:

**Terminal 1 (Frontend):**
```bash
cd frontend
npm install
npm start
```

**Terminal 2 (Dashboard):**
```bash
cd dashboard
npm install
npm start
```

*Note: You will also likely need to start the `backend` server in a third terminal to provide the necessary API responses for the applications to function fully.*

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
- Both projects use standard `package.json` configurations, so you can substitute `npm` with `yarn` or `pnpm` if you prefer.
