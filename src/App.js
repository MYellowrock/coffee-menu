import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Hot from "./components/Hot";
import Cold from "./components/Cold";
import Dessert from "./components/Dessert";

function App() {


  return (
    <div className="container mx-auto bg-black">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/hot" element={<Hot />}/>
          <Route path="/cold" element={<Cold />}/>
          <Route path="/dessert" element={<Dessert />}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
