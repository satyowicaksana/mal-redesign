import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import {
  Home,
  Anime,
  Login
} from 'views'
import {
  Navbar,
  Footer
} from 'components'
import './App.less';

const App = () => {
  const history = useHistory()

  const [isNavbarOverlay, setIsNavbarOverlay] = useState(false)

  useEffect(() => {
    setIsNavbarOverlay(history.location.pathname === '/' ||
    history.location.pathname.startsWith('/anime'))
    return history.listen(() => {
      setIsNavbarOverlay(history.location.pathname === '/' ||
      history.location.pathname.startsWith('/anime'))
    })
  }, [history])

  return (
    <div>
        <Navbar transparent={isNavbarOverlay} />
        <div className={`app-content-wrapper ${!isNavbarOverlay ? 'has-navbar-padding' : ''}`}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/anime/:id'>
              <Anime />
            </Route>
          </Switch>
        </div>
      <Footer />
    </div>
  );
}

export default App;
