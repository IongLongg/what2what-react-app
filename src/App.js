import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const MovieHomePage = React.lazy(() => import('./features/Movie'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header/>
        <Switch>
          <Redirect exact from="/" to="/movie"/>
          
          <Route path="/movie" component={MovieHomePage} />
        </Switch>
        <Footer/>
      </Router>
    </Suspense>
  );
}

export default App;
