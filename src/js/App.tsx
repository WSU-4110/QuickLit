//@ts-ignore
import underConstructionImage from "../assets/under-construction.jpeg";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

require('../style/App.scss');

const App = () =>{
    return (



            <><div className="navbar">
            <ul>
                <li className='nav-item'><a href="">Home</a></li>
                <li className='nav-item'><a href="">Discussions</a></li>
                <li className='nav-item'><a href="">Books</a></li>
                <li className='nav-item'><a href="mailto:QuickLit1@gmail.com.com?subject = Feedback&body = Message">Contact</a></li>
                <li className='nav-item'><a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md" target="_blank">About</a></li>
                <li className='nav-item'></li>
                <li>
                    <div id="signout-btn">
                        
                    </div>
                </li>
            </ul>
        </div><img id='under-construction-img' src={underConstructionImage}></img><div className='under-construction-statement big-font'><div id='quick-lit'>QuickLit</div> is coming soon!  </div><div className='under-construction-statement'>We're currently under construction. (<a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md">Click here</a> if you want to read more about us).</div></>
    );
}

export default App;