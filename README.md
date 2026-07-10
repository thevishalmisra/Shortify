# 🔗 Shortify — Modern MERN URL Shortener

Shortify is a full-stack MERN (MongoDB, Express, React, Node.js) web application that enables users to shorten long URLs, generate downloadable QR codes for easy sharing, and track click analytics (redirection counts) in real-time.

---

## 🚀 Features
- **URL Shortening**: Generates a compact, 7-character unique alias for long URLs.
- **QR Code Generator**: Generates an on-screen SVG QR code and provides a high-quality PNG download option.
- **Analytics Tracking**: Tracks total redirection clicks per shortened URL in MongoDB.
- **Responsive Web UI**: A beautiful, modern interface designed using **Tailwind CSS (v4)** and **DaisyUI**.
- **Multi-Device Support**: Configurable to run locally on your Wi-Fi network so you can test it on both your computer and mobile phone simultaneously.

---

## 🛠️ Tech Stack
- **Frontend**: React (v19), Vite (v7), Tailwind CSS (v4), DaisyUI, Axios, react-qr-code, react-router-dom, qrcode.
- **Backend**: Node.js, Express, Mongoose (MongoDB), nanoid, CORS, dotenv, nodemon.
- **Database**: MongoDB.

---

## ⚙️ Setup & Installation

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **MongoDB** installed and running locally (default: `mongodb://127.0.0.1:27017`) or a MongoDB Atlas URI.

---

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Shortify
```

### Step 2: Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/shortify
   PORT=5000
   BASE_URL=http://localhost:5000
   FRONTEND_URL=*
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *(Backend will start on http://localhost:5000 and connect to MongoDB).*

---

### Step 3: Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *(Frontend will start on http://localhost:5173).*

---

## 📱 Multi-Device & Mobile QR Code Scanning

### The Problem with `localhost`
By default, the application runs on `localhost`. If you scan the generated QR code on a mobile phone, your phone will try to search for the server on **itself** (`localhost` relative to the phone), resulting in a connection error. 

### The Solution: Local Network IP Config
To access the app and scan QR codes on your phone (or other devices), both devices must be on the **same Wi-Fi network**, and you must configure the servers to use your computer's local IP address instead of `localhost`.

#### Setup Steps:
1. **Find your computer's local IP address** (e.g. `192.168.x.x` or `10.153.236.x`):
   - **Windows (Command Prompt/PowerShell)**: Run `ipconfig` and look for the `IPv4 Address` under your active connection.
   - **macOS/Linux (Terminal)**: Run `ifconfig` or `ip a`.
   
2. **Update [backend/.env](backend/.env)**:
   Replace `localhost` in `BASE_URL` with your local IP address:
   ```env
   BASE_URL=http://<your-local-ip>:5000
   ```
   *Example:*
   ```env
   BASE_URL=http://10.153.236.106:5000
   ```

3. **Update [frontend/.env](frontend/.env)**:
   Replace `localhost` in `VITE_BACKEND_URL` with your local IP address:
   ```env
   VITE_BACKEND_URL=http://<your-local-ip>:5000
   ```

4. **Launch the Frontend with the Host Flag**:
   Run the frontend dev server by passing the `--host` flag:
   ```bash
   npm run dev -- --host
   ```
   This exposes the Vite server to your local network.

5. **Scan and Test**:
   - Access the site on your computer at `http://localhost:5173` or `http://<your-local-ip>:5173`.
   - Access the site on your phone at `http://<your-local-ip>:5173`.
   - Any QR code generated will now point to your computer's backend IP and can be scanned and opened on your phone successfully!
