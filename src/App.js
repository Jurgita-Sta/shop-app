import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component ={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <div className="jumbotron">
      <h1 className="display-4">Hello!!!!</h1>
      <p className="lead">This is a simple Shop</p>
      <hr className="my-4"/>
      <p>Nice to see You here</p>
      <Link to='/'><button className="btn btn-primary btn-lg">Go to shop</button>
                  </Link>
    </div>
  </div>
)
export default App;
