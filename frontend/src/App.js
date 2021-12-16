import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Home from "./Components/Home";
import BlogDetail from "./Components/BlogDetail";
import Compose from "./Components/Compose";
import StatsPage from "./Components/StatsPage";
import Login from "./Components/LoginPage";
// import SignupPage from "./Components/SignupPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" > {sessionStorage.getItem("isLoggedIn") === "true" ?  <Home/> : <Login/> } </Route>
          <Route exact path= "/detail/:id" component={BlogDetail} /> 
          <Route exact path="/create" > {sessionStorage.getItem("isLoggedIn") === "true" ?  <Compose/> : <Login/> } </Route>
          <Route exact path="/stats" > {sessionStorage.getItem("isLoggedIn") === "true" ?  <StatsPage/> : <Login/> } </Route>
          {/* <Route extact path="/login" component={Login} > </Route> */}
          {/* <Route extact path="/signup" component={SignupPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
