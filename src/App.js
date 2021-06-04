import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import datas from "./data.json";
import Menu from "./component/Menu/Menu";
import Planet from "./component/Planet/Planet";
import Homepage from "./component/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu datas={datas} />
        <Switch>
          <Route path="/planets-fact-site/:name">
            <Planet datas={datas} />
          </Route>
          <Route path="/">
            <Homepage datas={datas[2]} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
