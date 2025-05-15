import { UserManager } from 'oidc-client-ts'
import { oidcSettings } from '../config/AuthConfig.tsx'

export const userManager = new UserManager(oidcSettings)
