import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css"

const App = () => (
    <>
      <Nav />
      <Outlet />
    </>
  );
  

export default App;
