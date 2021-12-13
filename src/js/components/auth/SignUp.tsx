import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { UserPool } from "../../util/Constants";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: any) => {
        event.preventDefault();

        const userAttributes = []
        userAttributes.push(
            new CognitoUserAttribute({
                Name: "email",
                Value: email
            })
        );
        userAttributes.push(
            new CognitoUserAttribute({
                Name: "name",
                Value: name
            })
        );


        UserPool.signUp(username, password, userAttributes, [], (err, data) => {
            if (err) {
                console.error(err);
            }
                console.log(data);
            }
        );
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={onSubmit} className ="sigin-signup-form" >
                <h1 className="sub-header">Create Account</h1>
                <input 
                    type="username"
                    placeholder="Username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                
                <input 
                    type="name"
                    placeholder="Name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input 
                    type="email"
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

                <button className="main-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
}
