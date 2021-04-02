import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact"
import { LanguageProvider } from './Context/LanguageContext';

function App() {
  return (
    <div>
      <LanguageProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About.js" component={About} />
          <Route path="/Skills.js" component={Skills} />
          <Route path="/Contact.js" component={Contact} />
        </Switch>
      </LanguageProvider>
    </div>

  );
}

export default App;
