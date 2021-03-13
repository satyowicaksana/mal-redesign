import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'views/Home';
import Navbar from 'components/Navbar'
import './App.less';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
