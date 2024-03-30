import { Route, Routes } from 'react-router-dom';
import Products from './components/products';
import SamplePage from './components/samplePage';
import SideBar from './components/sideBar';
import './App.css';

function App() {
  const sampleData = ["Design Team", "Marketing Team", "Development Team", "Sales", "Design", "Office", "Legal"];

  return (
    <div className="container">
      <SideBar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/designteam' element={<SamplePage data={sampleData[0]} />} />
        <Route path='/marketingteam' element={<SamplePage data={sampleData[1]} />} />
        <Route path='/developmentteam' element={<SamplePage data={sampleData[2]} />} />
        <Route path='/sales' element={<SamplePage data={sampleData[3]} />} />
        <Route path='/design' element={<SamplePage data={sampleData[4]} />} />
        <Route path='/office' element={<SamplePage data={sampleData[5]} />} />
        <Route path='/legal' element={<SamplePage data={sampleData[6]} />} />
      </Routes>
    </div>
  );
}

export default App;
