import { Button } from 'antd';
import './App.less';

import Navbar from 'components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Button type='primary'>MyAnimeList Redesign</Button>
    </div>
  );
}

export default App;
