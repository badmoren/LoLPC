import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import './App.css';

const NotFound = () => {
  return <h1> 404 Not Found </h1>
}


//function App() {
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default  App; 
