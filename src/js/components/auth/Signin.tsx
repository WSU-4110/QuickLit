import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../util/UserPool";
import {signin} from '../../util/AuthUtility';

export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: any) => {
        event.preventDefault();
    
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
    
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
                signin(data.getIdToken(), data.getAccessToken());
                window.location.replace("/");
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            },
        });
    };

    return (
        <div className="form-container sign-in-container">
                <form onSubmit={onSubmit} className="sigin-signup-form">
                    <h1 className="sub-header">Sign in</h1>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="main-button" type="submit">Sign In</button>
                </form>
            </div>
    );
}
