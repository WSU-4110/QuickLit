import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_mYdkJHI13",
    ClientId: "1t4b6g7md9cnhqpkpn3s7me9jm"
}

export default new CognitoUserPool(poolData);