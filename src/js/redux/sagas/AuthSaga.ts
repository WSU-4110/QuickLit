import { call, put, takeLatest } from 'redux-saga/effects';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

import {
    AuthenticateUserInput,
    AuthenticateUserResponse
} from "../../model/Auth";
import { Actions, ActionTypes } from "../modules/Auth";
import { ActionWithPayload } from "../ReduxActions";

import UserPool from "../../util/UserPool";
import { signin } from "../../util/AuthUtility";

export function* sendSignInRequest(
    action: ActionWithPayload<
        ActionTypes.SEND_SIGN_IN_REQUEST,
        AuthenticateUserInput
    >
): any {
    try {
        const user = new CognitoUser({
            Username: action.payload.username,
            Pool: UserPool,
        });
      
        const authDetails = new AuthenticationDetails({
            Username: action.payload.username,
            Password: action.payload.password,
        });
        const response: AuthenticateUserResponse = yield call(
            [user, user.authenticateUser],
            authDetails, 
            {
                onSuccess: function(result) {
                    signin(result.getAccessToken());
                    window.location.replace("/");
                },
                onFailure: function(err) {
                    console.log(err)
                    throw `Error occurred while signing in ${err}`;
                }
            }
        );
        
        yield put(Actions.sendSignInRequestSucceeded(
            {
                name: "abe mused",
                username: "abe",
                jwtToken: "some fake token"
            }
        ));
    } catch (e) {
        console.error(`Another Error while signing in: ${e}`)
        yield put(Actions.sendSignInRequestFailed());
    }
}

export function* authSaga() {
    yield takeLatest(ActionTypes.SEND_SIGN_IN_REQUEST, sendSignInRequest);
}
