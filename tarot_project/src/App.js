
import IndividualCard from "./components/IndividualCard";
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
      <IndividualCard/>

    </div>
  );
}

export default App;
