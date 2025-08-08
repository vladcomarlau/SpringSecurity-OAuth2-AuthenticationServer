# SpringSecurity-OAuth2-AuthenticationServer

A full stack web app that configures and implements Spring Security OAuth2 login. A dedicated authentication server that securely logins users based on multiple redirects.

- Secure backend REST API with Java, Spring Boot, Spring Security, OAuth2 Authorization Server and Gradle for build automation
- Vite React frontend using TypeScript, TailwindCSS, react-oidc-context
- Automated CI/CD pipeline using Jenkins

## How to run
1. Clone repo
2. Configuration of backend in IntelliJ:
   - new Spring Boot app run configuration
   - main class: com.comarlau.backend.BackendApplication
   - Active profiles: dev
   - run backend
3. Frontend:
   - cd frontend folder
   - run command: npm i
   - run command: npm run dev
4. Access from browser: http://localhost:5173
   - user and password: vladcom