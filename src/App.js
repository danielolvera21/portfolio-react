import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header';
// import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {!contactSelected ? (
        <>
          <Header></Header>
          <main>
            <Portfolio></Portfolio>
            <About></About>
          </main>
        </>
      ) : (
        <main>
          <ContactForm></ContactForm>
        </main>
      )}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
