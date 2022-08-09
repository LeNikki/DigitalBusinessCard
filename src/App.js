
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Profile from './profile.jpg';

// <img src={require("./logo.svg").default}/>

function App() {
  return (
    <div className="App">
      
      <img src = {Profile}  className ="profilepic"/>
      <div className="App_components">
        <Info/>
        <About/>
        <Interests/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
