import { CognitoIdToken } from "amazon-cognito-identity-js";
import { QuickLitUser } from "../model/QuickLitUser";

export const TOKEN_ID_KEY = "quicklit-tokenid";
export const ACCESS_ID_KEY = "quicklit-accessid";
export const QUICKLIT_USER_KEY = "quicklit-user";


export const signin = (tokenID: CognitoIdToken, AccessID: CognitoIdToken): void=>{
    if(isTokenValid(tokenID) && isTokenValid(AccessID)){
        window.localStorage.setItem(TOKEN_ID_KEY, JSON.stringify(tokenID));
        window.localStorage.setItem(ACCESS_ID_KEY,  JSON.stringify(AccessID));

        const user = extractUserData(tokenID, AccessID);
        if(user){
            window.localStorage.setItem(QUICKLIT_USER_KEY, JSON.stringify(user));
        } else{
            console.error(`Error, can't extract user  from ${tokenID}`)
        }
    } else {
        console.error(`Error, can't set ${TOKEN_ID_KEY} and ${ACCESS_ID_KEY} to a falsy value`)
    }
}

export const signout = (): void=>{
    window.localStorage.removeItem(TOKEN_ID_KEY);
    window.localStorage.removeItem(ACCESS_ID_KEY);
}

export const isSignedIn = (): boolean=>{
    const tokenID = window.localStorage.getItem(TOKEN_ID_KEY);
    const AccessID = window.localStorage.getItem(ACCESS_ID_KEY);

    return tokenID && AccessID? true : false;
}

export const getUser = ()=>{
    const tokenIdString = window.localStorage.getItem(TOKEN_ID_KEY);
    const accessIdString = window.localStorage.getItem(ACCESS_ID_KEY);

    if(!tokenIdString || tokenIdString.length <= 0 ||
        !accessIdString || accessIdString.length <= 0){
            return;
    }
    const tokenId = JSON.parse(tokenIdString);
    const accessId = JSON.parse(accessIdString);
    return (!isTokenValid(tokenId) || !isTokenValid(accessId))?
        null : extractUserData(tokenId, accessId);


}
const isTokenValid = (token: any): boolean => token.jwtToken.length > 0;

const extractUserData = (tokenId: any, accessid : any): QuickLitUser=>{
    const user: QuickLitUser = {
        email: tokenId.email,
        isEmailVerified: tokenId.email_verified,
        commonName: tokenId.name,
        username: tokenId.username,
        cognitoTokenID: tokenId,
        cognitoAccessID: accessid
    };
    return user;
}