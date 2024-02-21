import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from './pages/City';




function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path=":weather" element={<City />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
