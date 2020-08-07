import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './components';
import { HomeScreen } from './pages/Home';
import { LoginScreen, RegisterScreen } from './pages/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch >
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
