import React, { useContext, useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Mybookings from '../components/Mybookings';
import { baseUrl } from '../services/commonApi';
import { editProfileApi } from '../services/allApis';
import { profileUpdateContext } from '../services/Context';

function UserDash() {

  const {editUpdate,setEditUpdate}=useContext(profileUpdateContext)

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

  // 8888888888888888888888888888

  const [existingImage, setExistingImage] = useState("")

  const [userProfile, setUserProfile] = useState({
    username: "",
    profile: "",
    phone: "",
    license: "",
  })

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"))
      setUserProfile({ ...userProfile, username: user.username, phone: user.phone, license: user.license,_id: user._id })
      setExistingImage(user.profile)
    }
  }, [editUpdate])

// console.log(userProfile);

const [preview, setPreview] = useState("")

//Image preview generation
useEffect(() => {
  if (userProfile.profile) {
      setPreview(URL.createObjectURL(userProfile.profile))
  }
  else {
      setPreview("")
  }
}, [userProfile.profile])

const handleUpdate=async(e)=>{
  e.preventDefault()
  const {username,phone,license,profile,_id}=userProfile

          //body data
          const reqBody = new FormData()
          reqBody.append("username", username)
          reqBody.append("phone", phone)
          reqBody.append("license", license)
          preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage)
  
  
          //header data
          const token = localStorage.getItem("token")
          if (token) {
              const headerConfig = {
                  "Content-Type": preview ? "multipart/form-data" : "application/json",
                  "access_token": `Bearer ${token}`
              }
              const result = await editProfileApi(reqBody, headerConfig, _id)
              console.log(result);
              if(result.status==200){
                localStorage.setItem("user",JSON.stringify(result.data))
                localStorage.setItem("currentUser",result.data.username)
                alert("update successfull..!")
                setEditUpdate(result.data)
              }
  
          }
  
}
console.log(userProfile);
  return (
    <div>
      <Header username={username} />
      <div className="dashboard">
        <Container>
          <div className='d-flex justify-content-around flex-wrap'>
            <div>
              <ProfileCard username={username} changeOpen={changeOpen} existingImage={existingImage} isProfileOpen={open} />
            </div>
            <div style={{ width: "50rem" }} className='p-3'>
              {open ? (
                <div className="shadow rounded-3 w-100">
                  <h3 className="text-center p-3">My profile</h3>
                  <div className="text-center">
                    <p>
                      <label htmlFor='im' >
                        <input id='im' type="file" onChange={(e) => setUserProfile({ ...userProfile, ["profile"]: e.target.files[0] })} style={{ display: 'none' }} />

                        {
                          existingImage == "" ?
                            <img src={preview ? preview :"https://i.postimg.cc/6pTqS6WS/Screenshot-2024-06-30-162542.png"} style={{ borderRadius: "100%", width: "180px", height:"180px" }} className='border shadow' alt="" />
                            :
                            <img src={preview ? preview :`${baseUrl}/uploads/${existingImage}`} style={{ borderRadius: "100%", width: "180px", height:"180px" }} alt="Profile Picture" />
                        }

                      </label>
                    </p>
                    <h5 className="text-center">Edit</h5>
                  </div>
                  <div className="p-3">
                    <input value={userProfile.username} onChange={(e) => { setUserProfile({ ...userProfile, ['username']: e.target.value }) }} className="form-control my-4" type="text" placeholder="Name" />
                    <input value={userProfile.phone} onChange={(e) => { setUserProfile({ ...userProfile, ['phone']: e.target.value }) }} className="form-control my-4" type="text" placeholder="Phone" />
                    <input value={userProfile.license} onChange={(e) => { setUserProfile({ ...userProfile, ['license']: e.target.value }) }} className="form-control my-4" type="text" placeholder="License No" />
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-primary' onClick={(e)=>handleUpdate(e)}>Save Changes</button>
                      </div>
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
