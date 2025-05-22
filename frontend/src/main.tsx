import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "react-oidc-context";
import {oidcSettings} from "./config/AuthConfig.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...oidcSettings}>
        <App />
      </AuthProvider>
  </StrictMode>,
)
