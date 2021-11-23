import {
    AuthenticateUserInput,
    AuthenticateUserResponse
} from "../../model/Auth";
import { ActionsUnion, createAction } from '../ReduxActions';

export interface AuthState {
    readonly isLoggedIn: boolean;
    readonly name: string;
    readonly username: string;
    readonly authToken: string;
    readonly isError: boolean;
    readonly isSuccess: boolean;
    readonly isLoading: boolean;
}

export enum ActionTypes {
    SEND_SIGN_IN_REQUEST = 'auth/SEND_SIGN_IN_REQUEST',
    SEND_SIGN_IN_REQUEST_SUCCEED = 'auth/SEND_SIGN_IN_REQUEST_SUCCESS',
    SEND_SIGN_IN_REQUEST_FAILED = 'auth/SEND_SIGN_IN_REQUEST_FAILED',
}

export const INITIAL_STATE_AUTH: AuthState = {
    isLoggedIn: false,
    name: "",
    username: "",
    authToken: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
};

export function reducer(
    state: AuthState = INITIAL_STATE_AUTH,
    action: AuthenticateUserActions
): AuthState {
    switch (action.type) {
        case ActionTypes.SEND_SIGN_IN_REQUEST:
            return {
                ...state,
                isError: false,
                isSuccess: false,
                isLoading: true,
            };
        case ActionTypes.SEND_SIGN_IN_REQUEST_SUCCEED:
            return {
                ...state,
                isLoggedIn: true,
                name: action.payload.name,
                username: action.payload.username,
                authToken: action.payload.jwtToken,
                isError: false,
                isSuccess: true,
                isLoading: false,
            };
        case ActionTypes.SEND_SIGN_IN_REQUEST_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                name: "",
                username: "",
                authToken: "",
                isError: true,
                isSuccess: false,
                isLoading: false,
            };
        default:
            return state;
    }
}

export const Actions = {
    sendSignInRequest: (input: AuthenticateUserInput) =>
        createAction(ActionTypes.SEND_SIGN_IN_REQUEST, input),
    sendSignInRequestSucceeded: (response: AuthenticateUserResponse) =>
        createAction(ActionTypes.SEND_SIGN_IN_REQUEST_SUCCEED, response),
    sendSignInRequestFailed: () => 
        createAction(ActionTypes.SEND_SIGN_IN_REQUEST_FAILED),
    
};

export type AuthenticateUserActions = ActionsUnion<typeof Actions>;
