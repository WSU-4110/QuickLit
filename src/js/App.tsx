import "regenerator-runtime/runtime";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxSaga from 'redux-saga';

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import BookPage from "./components/books/search/Books";

import DiscussionPage from "./components/discussion/DiscussionPage";
import ProfilePage from "./components/profile/ProfilePage";
import SignUpAndLoginPage from './components/auth/SignUpAndLoginPage';

import { ApplicationReducer } from "./redux/reducers/AppReducer";
import { authSaga } from "./redux/sagas/AuthSaga";

require('../style/App.scss');


const sagaMiddleware = reduxSaga();
const store = createStore(
  ApplicationReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);

const App = () =>{
    return (
      <Provider store={store}>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/book' component={BookPage} exact />
              <Route path='/discussion' component={DiscussionPage} exact />
              <Route path='/profile' component={ProfilePage} exact />
              <Route path='/auth' component={SignUpAndLoginPage} exact />

            </Switch>
        </Router>
      </Provider>
        
    );
}

export default App;