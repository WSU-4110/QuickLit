import { reducer as AuthReducer, INITIAL_STATE_AUTH, AuthenticateUserActions } from "../modules/Auth";

import { AppState } from "../state/AppState";


export const INITIAL_STATE: AppState = {
    auth: INITIAL_STATE_AUTH,
};

export const ApplicationReducer = function(
    state = INITIAL_STATE,
    action: any
): AppState {
    return {
        auth: AuthReducer(state.auth, action),
    };
};
