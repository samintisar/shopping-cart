import './App.css'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cart" element={<><Header /><Cart /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
