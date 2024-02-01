
import './App.css';
import Leftsidebar from './components/leftbar/LeftBar.jsx';
import Top from './components/leftbar/Top.jsx';
import Rightbar from './components/Rightbar.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  return (
    <>
    <div className="App">
      <Leftsidebar/>
      <Top/>
      {/* <Rightbar/> */}
    </div> 
  
    </>
  );
}

export default App;
