import React from 'react'
import { useNavigate } from 'react-router-dom'
import { userManager } from '../service/AuthService.tsx'

export const SigninCallback = () => {
    const nav = useNavigate()

    React.useEffect(() => {
        userManager.signinRedirectCallback()
            .then(() => nav('/', { replace: true }))
            .catch(err => console.error(err))
    }, [nav])

    return <div>Signing you in…</div>
}
