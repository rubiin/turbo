import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import Expense from "./components/Expense";

function App() {
  return <>
  <Router>
  <SideBar/>
  <Expense/>
  </Router>
  </>;
}

export default App;
