//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Switch now is Routes

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
                      
          <Route path="/search" element={<SearchPage />} />
                    
        </Routes>          
        <Footer />
      </Router>      
      
    </div>
  );
}

export default App;
