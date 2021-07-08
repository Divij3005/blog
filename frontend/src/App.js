import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from "./Components/Home";
import BlogDetail from "./Components/BlogDetail"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/detail" component={BlogDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
