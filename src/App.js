import './App.css';
import Products from './components/products';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <Products />
    </div>
  );
}

export default App;
