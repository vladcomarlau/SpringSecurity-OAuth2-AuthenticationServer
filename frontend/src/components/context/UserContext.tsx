import {createContext} from "react";
import {User} from "oidc-client-ts";

export const UserContext = createContext<User | null>(null);