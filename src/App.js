import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Error } from './components/error';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { Contact } from './components/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
