// src/routes/SignoutCallback.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userManager } from '../service/AuthService.tsx';

export const SignoutCallback: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        userManager.signoutRedirectCallback()
            .then(() => {
                // at this point `userManager.getUser()` will be null
                navigate('/');  // or wherever makes sense
            })
            .catch(err => {
                console.error('Error handling signout callback', err);
                navigate('/');
            });
    }, [navigate]);

    return <p>Signing you out…</p>;
};
