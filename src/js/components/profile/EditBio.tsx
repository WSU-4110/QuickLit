import React from 'react';
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpPost } from "../../api/Client";

interface Bio{
    bio: string
}

interface RequestState {
    loading: boolean;
    error: boolean;
    isSuccess: boolean;
}

const EditBio: any = () =>{
    const [bioState, SetBioState] = React.useState<Bio>({
        bio: ''  
    })

    const [loadingState, setLoading] = React.useState<RequestState>({
        loading: false,
        error: false,
        isSuccess: false
    })
    const handleChange: any = (event: any) => {
        SetBioState({
            ...bioState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit: any = (e: any) => {
        e.preventDefault();
        if (bioState.bio.trim()) {
            authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/userdata/bio', bioState);          
        }
    }
    return(
        <div className = "edit-bio">
            <form
            className = "edit-bio-form"
            onSubmit = {handleSubmit}>
                <div className = "createBio">
                    <input
                        type="text"
                        name="bio"
                        value={bioState.bio}
                        placeholder="Enter new bio"
                        className="bio-text-input"
                        onChange={handleChange}
                        maxLength={40}
                        required
                    />
                </div>
                <button 
                    className="bio-text-btn"
                    type="submit"
                    >
                    Change bio
                </button>
            </form>
        </div>
    )
}
export default EditBio;