import { userManager } from '../service/AuthService.tsx'

export const LoginButton = () => (
    <button onClick={() => userManager.signinRedirect()}>
        Log in
    </button>
)
