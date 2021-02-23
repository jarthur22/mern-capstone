import axios from 'axios';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from './components/home/Home';
import Stack from './components/stack/Stack';
import './App.css'
import About from './components/about/About';
import News from './components/news/News';

axios.defaults.baseURL = `${window.location.origin.includes('mern-capstone') ? window.location.origin : 'http://localhost:5000'}`;

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/stack/:page?" component={Stack}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={News}/>
      <Footer/>
    </Router>
  );
}

export default App;
