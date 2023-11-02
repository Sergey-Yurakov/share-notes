import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Create } from '../Create/Create';
import { Error } from '../Error/Error';
import { Note } from '../Note/Note';
import { About } from '../About/About';

import './App.css';
function App() {
    return (
        <div className="main">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/note/" component={Note} />
                    <Route exact path="/note/:noteURL" component={Note} />
                    <Route component={Error} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
