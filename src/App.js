import logo from './logo.svg';
import './App.css';
import {RouterProvider} from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  const {routes} = Routes()
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
