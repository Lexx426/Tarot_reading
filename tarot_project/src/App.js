
import MainBody from "./components/MainBody";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import './scss/index.scss'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MobileNav/>
      <MainBody/>

    </div>
  );
}

export default App;
