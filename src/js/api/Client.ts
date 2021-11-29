import { QuickLitUser } from "../model/QuickLitUser";
import {isSignedIn, getUser} from "../util/AuthUtility";
import { NOT_SIGNED_IN_RESPONSE } from "../util/Constants";
export function authenticatedHttpGet(url: string) {
    
    const user: QuickLitUser = getUser();
    if(!user){
        return NOT_SIGNED_IN_RESPONSE;
    }
    const request: Request = new Request(url);
    console.error(`user is ${JSON.stringify(user)}`)
    request.headers.append("Authorization", user.cognitoTokenJWT);
    console.log("request",request)

    return fetch(request).then((response)=>{
        const status: number = response.status as number;
        if (status >= 200 && status <= 399) {
            const responseJson = response.json();
            console.log(responseJson)
            return responseJson;
        }
        return Promise.reject(response);
    }).catch((error) =>{
        console.error(error);
    })
  }
  export function authenticatedHttpPost(url: string) {
    
    const user: QuickLitUser = getUser();
    if(!user){
        return NOT_SIGNED_IN_RESPONSE;
    }
    const request: Request = new Request(url);
    console.error(`user is ${JSON.stringify(user)}`)
    request.headers.append("Authorization", user.cognitoTokenJWT);
    console.log("request",request)
    return fetch(request,{method: "POST"}).then((response)=>{
        const status: number = response.status as number;
        if (status >= 200 && status <= 399) {
            const responseJson = response.json();
            console.log(responseJson)
            return responseJson;
        }
        return Promise.reject(response);
    }).catch((error) =>{
        console.error(error);
    })
  }
