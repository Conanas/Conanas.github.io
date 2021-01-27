import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/';
import Header from './components/Header/';
import About from './components/About/';
import Products from './components/Products/';
import Contact from './components/Contact/';
import Footer from './components/Footer/';
import './App.css';

function App() {
  return (
    <Router basename={""}>
      <div className="wrapper">
        <Header />
        <main className="d-flex align-items-center">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
