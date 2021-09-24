import './App.css';
import LandingDash from './Pages/LandingDash';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Landing" component={LandingDash}/>
      </Switch>
    </Router>
  );
}

export default App;
