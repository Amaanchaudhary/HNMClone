import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import Mens from './Components/Mens'
import Login from './Components/Login'
import Register from './Components/Register'
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import SingleProduct from './Components/SingleProduct';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/mens' element={<Mens />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/footer' element={<Footer/>} />
        <Route exact path='/navbar' element={<NavBar/>} />
        <Route exact path='/singleproduct' element={<SingleProduct/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
