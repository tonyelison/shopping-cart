import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const App = () => (
    <>
      <Nav />
      <Outlet />
    </>
  );
  

export default App;
