import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import underConstructionImage from '../assets/under-construction.jpeg';
 
Amplify.configure(awsConfig);
require('../style/App.scss');

const App = () =>{
    return (
        <>
            <div id="signout-btn">
                <AmplifySignOut/>
            </div>
            <img id='under-construction-img' src={underConstructionImage}></img>
            <div className='under-construction-statement big-font'>QuickLit is coming soon!  </div>
            <div className='under-construction-statement'>We're currently under construction. (<a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md">click here</a> if you want to read more about us). </div>
        </>
    );
}

export default withAuthenticator(App);