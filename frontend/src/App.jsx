import React from 'react'

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial', padding: 24 }}>
      <h1>MERN Frontend</h1>
      <p>This is a minimal Vite + React app to preview your frontend locally.</p>
      <p>
        Backend API (from env): <code>{apiUrl}</code>
      </p>
    </div>
  )
}
