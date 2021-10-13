import Amplify from 'aws-amplify';
//@ts-ignore
import awsConfig from '../aws-exports';
import { AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react';
//@ts-ignore
import underConstructionImage from '../assets/under-construction.jpeg';
 
Amplify.configure(awsConfig);
require('../style/App.scss');

const App = () =>{
    return (
        <AmplifyAuthenticator>
            <div className="navbar">
                <ul>
                    <li className='nav-item'><a href="">Home</a></li>
                    <li className='nav-item'><a href="">Discussions</a></li>
                    <li className='nav-item'><a href="">Books</a></li>
                    <li className='nav-item'><a href="mailto:QuickLit1@gmail.com.com?subject = Feedback&body = Message">Contact</a></li>
                    <li className='nav-item'><a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md" target="_blank">About</a></li>
                    <li>
                        <div id="signout-btn">
                            <AmplifySignOut/>
                        </div>
                    </li>
                </ul>
            </div>
            <img id='under-construction-img' src={underConstructionImage}></img>
            <div className='under-construction-statement big-font'><div id='quick-lit'>QuickLit</div> is coming soon!  </div>
            <div className='under-construction-statement'>We're currently under construction. (<a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md">Click here</a> if you want to read more about us). </div>
        </AmplifyAuthenticator>
    );
}

export default App;