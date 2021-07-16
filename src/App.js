import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// Components here
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience';
import Particles from 'react-particles-js'

function App() {
  return (
    <>
    <Particles
        params={{
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 200
            }
          }

        }}

      />

    <Navbar />
    <Header />
    <About />
    <Services />
    <Experience />
    </>
  );
}

export default App;
