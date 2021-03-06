import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Import
import Home from './pages/home';
import About from './pages/about';
import Forums from './pages/forums';
import ComingSoon from './pages/comingsoon';
import NotFound from './pages/404';

// Components Import
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/forums" component={Forums} />
        <Route exact path="/comingsoon" component={ComingSoon} />
        <Route exact path="/404" component={NotFound} />
      </Switch>
      <Footer />
    </Router>    
  );
}

export default App;
