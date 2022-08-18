import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Infinite from './components/infinite';
import { createGlobalStyle } from 'styled-components';
import {Switch,Route, Redirect } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle/>
      <Switch>
          <Route exact path = '/' component = {Infinite} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/service' component = {Services} />
          <Route exact path = '/contact' component = {Contact} />
      </Switch>
      <Redirect to = "/" />
       <Footer />
    </>
  )
}

export default App;

