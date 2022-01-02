import LeagueListing from "./containers/LeagueListing";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LeagueListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
