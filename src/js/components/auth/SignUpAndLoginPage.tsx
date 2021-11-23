import { useState } from 'react';
import SignUp from './SignUp';
import Signin from './Signin';
import Overlay from './Overaly';

require('../../../style/SignUpAndLoginPage/signUpAndLoginPage.scss');

export default function SignUpAndLoginPage(){
    const [rightPanelState, setRightPanelState] = useState("");

    const switchView = () =>{
        setRightPanelState(rightPanelState == "right-panel-active"? "" : "right-panel-active");
    }
    return (
        <div className={"container " + rightPanelState} id="container">
            <SignUp />
            <Signin />
            <Overlay switchView = {switchView}/>
        </div>
    );
    // return <h1>dfadsfkjbgasdjfbb</h1>
}
