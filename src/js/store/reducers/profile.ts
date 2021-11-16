import { CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR, UPDATE_PROFILE } from '../actions/types'

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action: { type: any; payload: any; }) {
    const {type, payload} = action;

    switch(type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null // removes browsed user's profile from state
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }
        default:
            return state;
    }
}
