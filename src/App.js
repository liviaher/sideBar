import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar/sidebar';

function App() {
  return (

    <div className='App'>
      
    <BrowserRouter>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
