
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/review' element={<Reviews></Reviews>}></Route>
     </Routes>
    </div>
  );
}

export default App;
