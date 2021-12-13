import { CognitoUserPool } from "amazon-cognito-identity-js";

export const BACKEND_BASE_URL = "http://quicklit-env.eba-99zv9awt.us-east-1.elasticbeanstalk.com";

export const NOT_SIGNED_IN_RESPONSE = "notSignedIn";

export enum RoutesUrls  {
    HOME = "/",
    DISCUSSION = "/discussion",
    BOOKSEARCH ="/book",
    PROFILE = "/profile",
    SIGN_IN_LOGIN = "/auth",
  }
  
export const UserPool = new CognitoUserPool({
    UserPoolId: "us-east-1_g106dWw7V",
    ClientId: "6i57b5gdmas211ae1tsvgjplv4"
});