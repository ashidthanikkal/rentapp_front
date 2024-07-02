import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Mybookings from '../components/Mybookings';

function UserDash() {

  const [username, setUsername] = useState("")
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUsername(localStorage.getItem("currentUser"))
    }
  }, [])


  const [open, setOpen] = useState(true);

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Header username={username} />
      <div className="dashboard">
        <Container>
          <div className='d-flex justify-content-around flex-wrap'>
              <div>
                <ProfileCard username={username} changeOpen={changeOpen} isProfileOpen={open} />
                </div>
              <div style={{width:"50rem"}}>
                {open ? (
                  <div className="shadow rounded-3 w-100">
                    <h3 className="text-center p-3">My profile</h3>
                    <div className="text-center">
                      <img
                        style={{ borderRadius: '50%', width: '150px', padding: '20px' }}
                        src="https://i.postimg.cc/6pTqS6WS/Screenshot-2024-06-30-162542.png"
                        alt="Profile Picture"
                      />
                      <h5 className="text-center">Edit</h5>
                    </div>
                    <div className="p-3">
                      <input className="form-control my-4" type="text" placeholder="Name" />
                      <input className="form-control my-4" type="email"  placeholder="Email" />
                      <input className="form-control my-4" type="text" placeholder="Phone" />
                      <input className="form-control my-4" type="text" placeholder="License No" />
                      <div className='d-flex justify-content-center '><button className='btn btn-primary'>Save Changes</button></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Mybookings />
                  </div>
                )}
              </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default UserDash;
