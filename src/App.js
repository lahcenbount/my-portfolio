import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Porjects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
