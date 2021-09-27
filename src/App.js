import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import CharctersList from "./pages/CharctersList";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route strict exact path='/' component={CharctersList} />
        <Route strict exact path='/search' component={Search} />
        <Route exact strict path='/:id' component={Character} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
