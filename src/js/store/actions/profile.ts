import axios from 'axios';
import {CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR} from './types';

// Get current user's profile
export const getCurrentProfile = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (error:any) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        });
    }
}

// Get All Profiles
export const getProfiles = () => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })

    } catch (error:any) {
    
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        });
    }
}

// Get Profile by ID
export const getProfileById = userId => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        });
    }
}

// Create or Update Profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/profile', formData, config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        if(!edit) {
            history.push('/dashboard');
        }

    } catch (error) {
        const errors = error.response.data.errors;
        if(error){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        });
    }
}
