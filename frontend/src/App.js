import './App.css';
import Header from './Components/Header'
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Home />
      <Header  header_ref={["Home","Profile","Stats","Search","Logout"]} clicked={0} />
    </>
  );
}

export default App;
