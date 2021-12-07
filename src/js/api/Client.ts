import axios from 'axios';
import { QuickLitUser } from "../model/QuickLitUser";
import {getUser} from "../util/AuthUtility";
export function authenticatedHttpGet(url: string) {
    
    const user: QuickLitUser = getUser();
    const request: Request = new Request(url);
    request.headers.append("Authorization", user.cognitoTokenJWT);
    
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

export async function authenticatedHttpPost(url: string, body: any) {
    
    const user: QuickLitUser = getUser();
    const response = await axios.post(url, body,
    {
      headers: {
        Authorization: user.cognitoTokenJWT
      }
    });
    return response;
  }