import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext.jsx'
import { PostProvider } from './context/PostContext.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </UserProvider>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>
);
