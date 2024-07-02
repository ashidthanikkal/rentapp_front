import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Bookingcar from './pages/Bookingcar';
import Landingpage from './pages/Landingpage';
import UserDash from './pages/UserDash';
import Mybookings from './components/Mybookings';
import Auth from './pages/Auth';
import AdminDash from './pages/AdminDash';
import AdminCarCard from './components/AdminCarCard';
import ViewUser from './pages/ViewUser';
import Payment from './pages/Payment';
import { useContext} from 'react';
import { authContext } from './services/Context';

function App() {
  const {isAdmin}=useContext(authContext)
  // console.log(isAdmin);
  return (
    <div className="App" >
      <Routes>
      <Route path='/' element={ isAdmin ?  <AdminDash></AdminDash>:<Landingpage/>}></Route>
      <Route path='/authentication' element={ <Auth></Auth>}></Route>
       <Route path='/register' element={ <Auth register></Auth>}></Route>
       <Route path='/home' element={ <Homepage></Homepage>}></Route>
       <Route path='/booking/:carId' element={ <Bookingcar></Bookingcar>}></Route>
       <Route path='/userdash' element={ <UserDash></UserDash>}></Route>
       <Route path='/my_bookings' element={ <Mybookings></Mybookings>}></Route>
       <Route path='/admin' element={ <AdminDash></AdminDash>}></Route>
       <Route path='/admin_car' element={ <AdminCarCard></AdminCarCard>}></Route>
       <Route path='/view_user' element={ <ViewUser></ViewUser>}></Route>
       <Route path='/payment' element={ <Payment></Payment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
