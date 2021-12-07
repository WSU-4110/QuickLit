import { CognitoIdToken } from "amazon-cognito-identity-js";

export interface QuickLitUser{
    commonName: string;
    username: string;
    cognitoTokenJWT: string;
    tokenExpiration: number;
}