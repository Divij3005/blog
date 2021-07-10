import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from "./Components/Home";
import BlogDetail from "./Components/BlogDetail"
import Compose from "./Components/Compose"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/detail" component={BlogDetail} />
        <Route exact path="/compose" component={Compose} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
