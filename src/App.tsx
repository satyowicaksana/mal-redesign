import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import {
  Home,
  Anime,
  Register
} from 'views'
import {
  Navbar,
  Footer
} from 'components'
import './App.less';

const App = () => {
  const history = useHistory()

  const [showNavbar, setShowNavbar] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setShowNavbar(history.location.pathname === '/' ||
    history.location.pathname.startsWith('/anime'))
    setShowFooter(history.location.pathname !== '/register')
    return history.listen(() => {
      setShowNavbar(history.location.pathname === '/' ||
      history.location.pathname.startsWith('/anime'))
      setShowFooter(history.location.pathname !== '/register')
    })
  }, [history])

  return (
    <div>
        {showNavbar && <Navbar/>}
        <div className='app-content-wrapper'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/anime/:id'>
              <Anime />
            </Route>
            <Route exact path='/anime/:id/:menu'>
              <Anime />
            </Route>
          </Switch>
        </div>
        {showFooter && <Footer />}
    </div>
  );
}

export default App;
