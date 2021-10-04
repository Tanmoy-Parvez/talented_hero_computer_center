import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
