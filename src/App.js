import './App.css';
import Main from './components/Main';
import Right from './components/Right';
import SideBar from './components/SideBar';
import Top from './components/Top';

function App() {
  return (
    <div className="container">
     
     <SideBar/>
     <Main />
     <Right />
    </div>
  );
}

export default App;
