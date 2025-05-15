import { UserManagerSettings } from 'oidc-client-ts'

export const oidcSettings: UserManagerSettings = {
    authority: import.meta.env.VITE_OIDC_ISSUER,             // auth server
    client_id: 'spa-client',
    redirect_uri: `${import.meta.env.VITE_FRONTEND_URL}/signin-callback`,
    post_logout_redirect_uri: `${import.meta.env.VITE_FRONTEND_URL}/signout-callback`,
    response_type: 'code',
    scope: 'openid profile',
    // PKCE is automatic in oidc-client-ts
    metadata: { //aici sa fie potrivite cu .authorizationEndpoint("") setate in authServerSettings
        issuer: import.meta.env.VITE_OIDC_ISSUER,
        authorization_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/oauth2/v1/authorize`,
        token_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/oauth2/v1/token`,
        revocation_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/oauth2/v1/revoke`,
        jwks_uri: `${import.meta.env.VITE_OIDC_ISSUER}/oauth2/v1/jwks`,
        userinfo_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/connect/v1/userinfo`,
        end_session_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/connect/v1/logout`,
        registration_endpoint: `${import.meta.env.VITE_OIDC_ISSUER}/connect/v1/register`
    }
}
