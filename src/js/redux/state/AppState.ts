import {AuthState} from "../modules/Auth";

export interface AppState {
    readonly auth: AuthState;
}
