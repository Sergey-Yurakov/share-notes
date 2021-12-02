import './App.css';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Create from './components/Create';
import Error from './components/Error';
import Note from './components/Note';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="main">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Main} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/create" component={Create} />  
          <Route exact path="/note/" component={Note} /> 
          <Route exact path="/note/:noteURL" component={Note} /> 
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
