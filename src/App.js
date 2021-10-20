import { Route, Switch } from 'react-router-dom';
import './App.css';

import FavouritesPage from './pages/Favourites';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (<div>
    <Layout>
      <Switch>
        <Route path="/" exact><AllMeetupsPage /></Route>
        <Route path="/new-meetup" exact><NewMeetupPage /></Route>
        <Route path="/favourites" exact><FavouritesPage /></Route>
      </Switch>
    </Layout>
  </div>
  );
}

export default App;
