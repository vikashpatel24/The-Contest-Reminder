import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbars from './components/Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Navbars />
      <Footer />
    </>
  );
}

export default App;
