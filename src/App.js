import Header from './components/Header/';
import Navbar from './components/Navbar/';
import About from './components/About/';
import Projects from './components/Projects/';
import Contact from './components/Contact/';
import Footer from './components/Footer/';
import Modal from './components/Modal/';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>

        <About />
        <Projects />
        <Contact />

      </main>

      <Footer />

      <Modal />
    </>
  );
}

export default App;
