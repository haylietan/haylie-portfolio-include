import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Error } from './components/error';
// font import from google fonts

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutMe' element={<AboutMe/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
