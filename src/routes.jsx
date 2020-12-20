import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from 'src/pages/login/login';


// const isAuth = () => {
//   const userLocal = localStorage.getItem('user');
//   if (!userLocal) {
//     return false;
//   }
//   return true;
// };

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export { Routes as default };
