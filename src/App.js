import logo from './logo.svg';
import './App.css';
import  MenuBar  from './components/menu-bar/';
import SideMenu from './components/side-menu';
import StoriesMenu from './components/stories-menu';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <StoriesMenu></StoriesMenu>
      <SideMenu></SideMenu>
      
    </div>
  );
}

export default App;
