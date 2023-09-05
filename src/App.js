import logo from './logo.svg';
import './App.css';
import {RouterProvider} from "react-router-dom";
import Routes from "./Routes/Routes";
import DashProvider from './DashContext/DashReducer';

function App() {
  const {routes} = Routes()
  return (
    <div className="App">
      <DashProvider>
        <RouterProvider router={routes} />
      </DashProvider>
    </div>
  );
}

export default App;
