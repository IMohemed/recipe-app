import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home} from "./pages/home";
import {Auth} from "./pages/auth";
import {CreateRecipe} from "./pages/create_recipe";
import {SavedRecipe} from "./pages/saved_recipe";
import {Navbar} from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/auth" element = {<Auth/>}></Route>
          <Route path="/createRecipe" element = {<CreateRecipe/>}></Route>
          <Route path="/savedRecipe" element = {<SavedRecipe/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
