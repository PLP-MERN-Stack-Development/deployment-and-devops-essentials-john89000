# Backend (Express)

Run the backend locally (PowerShell):

```powershell
cd "C:\Users\GOAT\Downloads\2025 PROJECTS\MERN\deployment-and-devops-essentials-john89000\backend"

# Install dependencies (including devDependencies like nodemon)
npm install

# Start in development mode (auto-restarts on change)
npm run dev

# Or start production mode
npm start
```

Notes:
- `server.js` is the entry point used by the scripts.
- Ensure you have a `.env` file with `MONGODB_URI` and other required variables before starting the server.
- If you prefer not to use nodemon, you can run `node server.js` directly.
