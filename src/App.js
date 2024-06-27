import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Bookingcar from './pages/Bookingcar';
import Landingpage from './pages/Landingpage';
import UserDash from './pages/UserDash';

function App() {
  return (
    <div className="App" >
      <Routes>
       <Route path='/' element={ <Landingpage></Landingpage>}></Route>
       <Route path='/home' element={ <Homepage></Homepage>}></Route>
       <Route path='/booking' element={ <Bookingcar></Bookingcar>}></Route>
       <Route path='/userdash' element={ <UserDash></UserDash>}></Route>
      </Routes>
    </div>
  );
}

export default App;
