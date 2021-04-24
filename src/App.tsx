import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  Anime
} from 'views'
import {
  Navbar,
  Footer
} from 'components'
import './App.less';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/anime/:id'>
            <Anime />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
