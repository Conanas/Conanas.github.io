import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/';
import Header from './components/Header/';
import About from './components/About/';
import Products from './components/Products/';
import Contact from './components/Contact/';
import Footer from './components/Footer/';
import Modal from './components/Modal/';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="d-flex align-items-center">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
