import logo from './logo.svg';
import './App.css';
import home from "./pages/home";
import contact from "./pages/contact";
import { Redirect, Route, Switch } from "react-router-dom"
import { porject1,porject2,porject3,porject4 } from './pages/projects';

function App() {
  return (
    <Switch>
      <Route exact path="/" component= {home}/>
      <Route exact path="/projet-1" component= {porject1}/>
      <Route exact path="/projet-2" component= {porject2}/>
      <Route exact path="/projet-3" component= {porject3}/>
      <Route exact path="/projet-4" component= {porject4}/>
      <Route exact path="/contact" component= {contact}/>
      
    </Switch>
  );
}

export default App;
