import React from 'react';
import { getUser, isSignedIn } from "../../util/AuthUtility";
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpPost } from "../../api/Client";

interface Bio{
    bioText: string
}

interface RequestState {
    loading: boolean;
    error: boolean;
    isSuccess: boolean;
}

const EditBio: any = () =>{
    const [bioState, SetBioState] = React.useState<Bio>({
        bioText: ''  
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
        if (bioState.bioText.trim()) {
             authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/userdata/bio', bioState);
          
        }
    }
    return(
        <div className = "edit-bio">
            <p>EditBio</p>
            <form
            className = "edit-bio-form"
            onSubmit = {handleSubmit}>
                <div className = "createBio">
                <input
                        type="text"
                        name="bioText"
                        value={bioState.bioText}
                        className="bio-text-input"
                        onChange={handleChange}
                        maxLength={40}
                        required
                    />
                </div>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditBio;