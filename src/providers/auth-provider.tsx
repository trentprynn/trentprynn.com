import { Auth0Provider } from '@auth0/auth0-react'
import config from './auth0-config.json'

export const AuthProvider = ({ children }: any) => {
    return (
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}
            audience={config.audience}
            useRefreshTokens={config.useRefreshTokens}
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    )
}
