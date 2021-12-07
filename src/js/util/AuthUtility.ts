import { CognitoIdToken } from "amazon-cognito-identity-js";
import { QuickLitUser } from "../model/QuickLitUser";

export const QUICKLIT_USER_KEY = "quicklit-user";


export const signin = (AccessID: CognitoIdToken): void=>{
    if(isTokenValid(AccessID)){

        const user = extractUserData(AccessID);
        if(user){
            window.localStorage.setItem(QUICKLIT_USER_KEY, JSON.stringify(user));
        } else{
            console.error(`Error, can't extract user  from ${AccessID}`)
        }
    } else {
        console.error(`Error, AccessID is a falsy value`);
    }
}

export const signout = (): void=>{
    window.localStorage.removeItem(QUICKLIT_USER_KEY);
}

export const isSignedIn = (): boolean=>{
    const userData = window.localStorage.getItem(QUICKLIT_USER_KEY);

    return userData ? true : false;
}

export const getUser = ()=>{
    const userDataString = window.localStorage.getItem(QUICKLIT_USER_KEY);

    if(!userDataString || userDataString.length <= 0){
        console.info(`userdata is undefined. Redirecting to auth page`);
        window.location.replace("/auth");
        return;
    }
    const userData = JSON.parse(userDataString);
    const time = new Date().getTime();

    console.info(`time: ${time}, tokenExpiration ${userData.tokenExpiration}.`);

    if( time >= userData.tokenExpiration){
        console.info(`time: ${time}, tokenExpiration ${userData.tokenExpiration}. Redirecting to auth page`);
        window.location.replace("/auth");
    }
    return userData;
}
const isTokenValid = (token: any): boolean => token.jwtToken.length > 0;

export const extractUserData = (tokenId: CognitoIdToken): QuickLitUser=>{

    const user: QuickLitUser = {
        commonName: "abe",
        username: tokenId.payload.username,
        cognitoTokenJWT: tokenId.getJwtToken(),
        tokenExpiration: tokenId.getExpiration()*1000
    };
    return user;
}