import React from 'react';
import { userManager } from '../service/AuthService.tsx';

export const LogoutButton: React.FC = () => {
    const handleLogout = () => {
        // This will redirect the browser to Spring AS's /connect/v1/logout endpoint
        userManager.signoutRedirect().catch(err => {
            console.error('Logout failed', err);
        });
    };

    return (
        <button onClick={handleLogout}>
            Sign Out
        </button>
    );
};
