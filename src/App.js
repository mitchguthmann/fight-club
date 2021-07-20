import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';
import ScheduleForm from './components/pages/ScheduleForm';
import Fighters from './components/pages/Fighters';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/schedule/new" exact component={ScheduleForm} />
          <Route path="/fighters" exact component={Fighters}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
