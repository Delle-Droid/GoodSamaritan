import React from 'react';
import './App.css';
import Landing from './components/Landing';
import {NavigationBar}  from './components/NavigationBar';
import { Footer } from './components/Footer';


const App = () => (
  <React.Fragment>
      < NavigationBar />
      <Landing />
      < Footer />
  </React.Fragment>
)

export default App;
    
      
    

