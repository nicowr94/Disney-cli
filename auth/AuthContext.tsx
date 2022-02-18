import { createContext } from "react";

interface user {
    logged: boolean,
    name:string,
    token:string,
    role:string,
    email:string
}

interface props {
    user: user;
    dispatch: any;
    logged:boolean,
    
}

export const AuthContext = createContext({} as props);
