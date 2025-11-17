# Frontend (Vite + React)

This is a minimal Vite + React scaffold so you can view the frontend locally.

PowerShell (Windows) — run from the `frontend` folder:

```powershell
# install dependencies
npm install

# start dev server (opens at http://localhost:5173 by default)
npm run dev

# build for production
npm run build

# locally preview build on port 5000
npm run preview
```

Environment variables:
- Create a `.env` file in `frontend/` to override defaults.
- Example variable name used in app: `VITE_API_URL` (note Vite requires VITE_ prefix).

If you want the frontend to call your locally running backend, set `VITE_API_URL=http://localhost:5000` in `.env`.
