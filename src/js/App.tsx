import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import DiscussionPage from "./components/discussion/DiscussionPage";
import ProfilePage from "./components/profile/ProfilePage";
import BookPage from './components/bookpage/BookPage';

require('../style/App.scss');

const App = () =>{
    return (
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/discussion' component={DiscussionPage} exact />
              <Route path='/profile' component={ProfilePage} exact />
              <Route path='/bookpage' component={BookPage} exact />
            </Switch>
        </Router>
        
    );
}

export default App;