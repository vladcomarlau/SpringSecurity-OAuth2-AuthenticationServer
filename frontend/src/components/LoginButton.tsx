import { userManager } from '../service/AuthService.tsx'

export const LoginButton = () => (
    <div className="btn btn-neutral m-1" onClick={() => userManager.signinRedirect()}>
        Log in
    </div>
)
