import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode })=> {
    const env = loadEnv(mode, process.cwd());
    console.log('Current Mode:', mode);
    console.log('VITE_BASE_URL:', env.VITE_BASE_URL);
    return {
        base: env.VITE_BASE_URL,
        plugins: [
            react(),
            tailwindcss(),
        ]
    }
})
