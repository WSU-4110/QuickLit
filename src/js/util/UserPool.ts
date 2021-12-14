import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_g106dWw7V",
    ClientId: "6i57b5gdmas211ae1tsvgjplv4"
}

export default new CognitoUserPool(poolData);