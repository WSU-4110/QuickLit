import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
 
Amplify.configure(awsConfig);
require('../style/App.scss');

const App = () =>{
    <AmplifySignOut />
    return <h1 id="greeting">QuickLit is awesome. Also, we have hot reload enabled! Try editing App.tsx and observe this page reload.</h1>;
}

export default withAuthenticator(App);