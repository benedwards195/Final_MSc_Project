import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import useToken from './components/useToken';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Weekly from './components/Weekly';
import Chest from './components/Chest';
import Back from './components/Back';
import Legs from './components/Legs';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from './components/NavBar.js';
import Home from './components/Home';
import About from './components/About';
import SNW from './components/SNW';
import RW from './components/RW';
import WH from './components/WH';
import OW from './components/OW';
import Logout from './components/Logout';
import Bulk from './components/Bulk';
import Cut from './components/Cut';
import Shoulder from './components/Shoulder';
import Arms from './components/Arms';
import Prenavbar from './prenavbar/Prenavbar';
import GallerySlider from './components/GallerySlider';
import WorkoutList from './components/WorkoutList';


function App() {
 const {token, setToken} = useToken();

  let component;
 
  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break
    case "/snw":
      component = <SNW />
      break
    case "/rw":
      component = <RW />
      break
    case "/wh":
      component = <WH />
      break
    case "/ow":
      component = <OW />
      break
    case "/logout":
      component = <Logout />
      break
    case "/about":
      component = <About />
      break
    case "/login":
      component = <Login />
      break
    case "/register":
      component = <Register />
      break
    case "/bulk":
      component = <Bulk />
      break 
    case "/cut":
      component = <Cut />
      break
    case "/workoutlist":
      component = <WorkoutList />
      break
    case "/chest":
      component = <Chest />
      break
    case "/back":
      component = <Back />
      break
    case "/shoulder":
      component = <Shoulder />
      break 
    case "/legs":
      component = <Legs />
      break 
    case "/arms":
      component = <Arms />
      break
    case "/prenavbar":
      component = <Prenavbar />
      break
    case "/footer":
      component = <Footer />
      break
    case "/logout":
      component = <Logout setToken={setToken} />
  }
 
    if(!token || token === "") {
      return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setToken={setToken} />}/>
          <Route path='/register' element={<Register />} />
          <Route exact path='/' element={
            <>
            <Prenavbar/>
            <div className="container">
            <Home/>
            </div>
            </>
           } 
           />

          <Route path='/logout' element={<Logout setToken={setToken} /> } />
          <Route path='/*' element={<PageNotFound/>} />
          </Routes>
          </BrowserRouter>
          )
    }

  
  //const [currentForm, setCurrentForm] = useState('login');

  /*const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  */
  return (
    <>
    <NavBar/>
    <div className="container"> {/*{component}</div> */}
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/snw' element={<SNW/>} />
      <Route path='/rw' element={<RW/>} />
      <Route path='/wh' element={<WH/>} />
      <Route path='/ow' element={<OW/>} />
      <Route path='/logout' element={<Logout setToken={setToken} />} />
      <Route path='/about' element={<About/>} />
      <Route path='/bulk' element={<Bulk/>} />
      <Route path='/cut' element={<Cut/>} />
      <Route path='/weekly' element={<Weekly/>} />
      <Route path='/workoutlist' element={<WorkoutList/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/logout' element={<Logout setToken={setToken} />} />

    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
    
    </>
  );
};

export default App;