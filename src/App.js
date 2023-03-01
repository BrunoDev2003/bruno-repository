import logo from './logo.svg';
import './App.css';
import  MenuBar  from './components/menu-bar/';
import SideMenu from './components/side-menu';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <SideMenu></SideMenu>
    </div>
  );
}

export default App;
