import React, { useState } from "react";
import { connect } from 'react-redux';
import { Actions } from '../../redux/modules/Auth';
import { AppState } from '../../redux/state/AppState';

import {
    AuthenticateUserInput
} from "../../model/Auth";


export interface Props {
    isLoggedIn: boolean;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    sendSignInRequest: (input: AuthenticateUserInput) => any;
}


function Signin(props: Props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: any) => {
        event.preventDefault();
        const input: AuthenticateUserInput = {
            username: username,
            password: password
        }
        props.sendSignInRequest(input);
    };

    return (
        <div className="form-container sign-in-container">
                <form onSubmit={onSubmit} className="sigin-signup-form">
                    <h1 className="sub-header">Sign in</h1>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="main-button" type="submit">
                        {props.isLoading? "Loading"
                        : props.isError? "Error"
                        : "Sign in"}
                        </button>
                </form>
            </div>
    );
}
const mapDispatchToProps: Partial<Props> = {
    sendSignInRequest: Actions.sendSignInRequest,
};
const mapStateToProps = (state: AppState): Partial<Props> => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading,
    isError: state.auth.isError,
    isSuccess: state.auth.isSuccess,
});
export default connect<Partial<Props>, any, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
