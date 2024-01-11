import React from 'react';
import Header from './components/header/Header';
import Topcontainer from './components/TopContainer/Topcontainer';
import Skillcontainer from './components/skillcontainer/Skillcontainer';
import Projectcontainer from './components/projectcontainer/ProjectContainer';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Contact />

    </div>
  );
}

export default App;
