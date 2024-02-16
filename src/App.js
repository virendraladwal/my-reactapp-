import './App.css';
// import { LoginSignup } from './Components /LoginSignup/LoginSignup';
import  Navbar from './Components /NavBar/navbar';
import Intro from './Components /Intro/intro';
import Skill from './Components /Skills/skill';
import Works from './Components /Works/works';
function App() {
  return (
    <div>
     {/* < LoginSignup/> */}
      <Navbar/> 
      <Intro/>
      <Skill/>
      <Works/>
    </div>
  );
}

export default App; 
 