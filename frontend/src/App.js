import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Home from "./Components/Home";
import BlogDetail from "./Components/BlogDetail"
import Compose from "./Components/Compose"
import StatsPage from "./Components/StatsPage"


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path= "/detail/:id" component={BlogDetail} />
          <Route exact path="/create" component={Compose} />
          <Route exact path="/stats" component={StatsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
