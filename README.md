# Shortify

A URL Shortening service built using the MERN stack (MongoDB, Express, React, Node.js).

## Features
- URL Shortening with unique custom alias.
- Interactive QR Code generator (with PNG download).
- Click tracking analytics.
- Modern interface styled with Tailwind CSS and DaisyUI.

## Getting Started

### Prerequisites
- Node.js
- MongoDB (Running locally or a MongoDB Atlas URI)

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thevishalmisra/Shortify.git
   cd Shortify
   ```

2. **Backend Configuration**
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGO_URI=mongodb://127.0.0.1:27017/shortify
     PORT=5000
     BASE_URL=http://localhost:5000
     FRONTEND_URL=*
     ```
   - Install dependencies and start the backend:
     ```bash
     cd backend
     npm install
     npm run dev
     ```

3. **Frontend Configuration**
   - Create a `.env` file in the `frontend` directory:
     ```env
     VITE_BACKEND_URL=http://localhost:5000
     ```
   - Install dependencies and start the frontend:
     ```bash
     cd ../frontend
     npm install
     npm run dev
     ```

## Local Network Testing (Optional)
To test the QR code scanning or open the app on other local devices (like a mobile phone):
1. Replace `localhost` in both `.env` files with your computer's local IP address (e.g. `192.168.X.X` or `10.X.X.X`).
2. Start the frontend server with the host option:
   ```bash
   npm run dev -- --host
   ```
3. Connect your devices to the same Wi-Fi network and access the frontend via `http://<your-local-ip>:5173`.
