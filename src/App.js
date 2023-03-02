import logo from './logo.svg';
import './App.css';
import  MenuBar  from './components/menu-bar/';
import SideMenu from './components/side-menu';
import StoriesMenu from './components/stories-menu';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <SideMenu></SideMenu>
      <StoriesMenu></StoriesMenu>
    </div>
  );
}

export default App;
