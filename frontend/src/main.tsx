import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "react-oidc-context";
import {oidcSettings} from "./config/AuthConfig.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AuthProvider {...oidcSettings}>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <App />
            </BrowserRouter>
        </AuthProvider>
  </StrictMode>
)
