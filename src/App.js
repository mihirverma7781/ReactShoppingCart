import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import NavbarItem from './Navbar';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <>
      <NavbarItem/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
