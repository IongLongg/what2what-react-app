import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const Home = React.lazy(() => import('./features/Movie/pages/Main'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </Suspense>
  );
}

export default App;
