import { CognitoIdToken } from "amazon-cognito-identity-js";

export interface QuickLitUser{
    email: string;
    isEmailVerified: boolean;
    commonName: string;
    username: string;
    cognitoTokenID: any;
    cognitoAccessID: CognitoIdToken;
}