
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Chart from './Component/Chart/Chart';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/review' element={<Reviews></Reviews>}></Route>
       <Route path='/chart' element={<Chart></Chart>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
