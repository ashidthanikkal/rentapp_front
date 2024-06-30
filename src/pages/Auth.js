import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { loginApi, registerApi } from '../services/allApis';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authContext } from '../services/Context';

function Auth({ register }) {
    const {isAdmin,setIsAdmin}=useContext(authContext)

    //navigate
    const navigate=useNavigate()

    //state store from inputs
    const [userInputs, setUserInputs] = useState({
        username: "",
        email: "",
        password: ""
    })
    //state to check validation
    const [validUserName, setValidUserName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPssword, setValidPassword] = useState(false)



    const setData = (e) => {
        const { name, value } = e.target
        //username
        if (name == "username") {
            if (value.match(/^[a-zA-Z ]+$/)) {
                setValidUserName(false)
                setUserInputs({ ...userInputs, [name]: value })
            }
            else {
                setValidUserName(true)
            }
        }
        //email
        if (name == "email") {
            if (value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                setValidEmail(false)
                setUserInputs({ ...userInputs, [name]: value })
            }
            else {
                setValidEmail(true)
            }
        }
        //password
        if (name == "password") {
            if (value.match(/^[a-zA-Z0-9]/)) {
                setValidPassword(false)
                setUserInputs({ ...userInputs, [name]: value })
            }
            else {
                setValidPassword(true)
            }
        }
        // setUserInputs({ ...userInputs, [name]: value })
    }

    const handleRegister=async(e)=>{
        e.preventDefault()
        const {username,email,password}=userInputs
        if(!username||!email||!password){
            alert("please fill all datas")
        }
        else{
           const result= await registerApi(userInputs)
           if(result.status==201){
            // alert(result.data)
            toast.success(result.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            setUserInputs({ ...userInputs,username:"",email:"",password:"" })
            navigate('/authentication')


           }
           else{
            // alert(result.response.data)
            toast.error(result.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
           }
        }
    }

    //login
    const handleLogin=async(e)=>{
        e.preventDefault()
        const {email,password}=userInputs
        if(email==""||password==""){
            alert("please fill all datas")
        }
        else{
           const result= await loginApi(userInputs)
           if(result.status==200){
            //if login success then  store username and id in local storage
            localStorage.setItem("currentUser",result.data.user.username)
            localStorage.setItem("userId",result.data.user._id)
            localStorage.setItem("token",result.data.token)
            localStorage.setItem("user",JSON.stringify(result.data.user))
            localStorage.setItem("role",result.data.role)


            // alert(result.data)
            toast.success(result.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });

            setUserInputs({ ...userInputs,email:"",password:"" })
            setIsAdmin(prev=>!prev)
            navigate('/')//navigation when login

           }
           else{
            // alert(result.response.data)
            toast.error(result.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });

            setUserInputs({ ...userInputs,email:"",password:"" })
           }
        }
    }



    // console.log(userInputs);
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>

            <div className='text-center shadow p-5 rounded'>
                <Link to={'/'} style={{ textDecoration: "none" }}> <h6 className='text-start'><i className="fa-solid fa-arrow-left"></i> Back To Home</h6></Link>
                {
                    register ?
                        <h2 className='p-3'>Sign Up</h2>
                        :
                        <h2 className='p-3'>Login</h2>
                }

                {register &&
                    <>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="username"
                                name='username'
                                value={userInputs.username?.username}
                                onChange={(e) => setData(e)}
                            />
                            <label htmlFor="floatingInputCustom" style={{ color: "grey" }}>Username</label>
                        </Form.Floating>

                        {
                            validUserName &&
                            <p className='text-danger'>enter a valid username</p>
                        }

                    </>

                }
                <>
                    <Form.Floating className="mb-1">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            name='email'
                            value={userInputs.email?.email}
                            onChange={(e) => setData(e)}
                        />
                        <label htmlFor="floatingInputCustom" style={{ color: "grey" }}>Email </label>
                    </Form.Floating>
                    {
                        validEmail &&
                        <p className='text-danger'>enter a valid email</p>
                    }

                </>

                <>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={userInputs.password?.password}
                            onChange={(e) => setData(e)}
                        />
                        <label htmlFor="floatingPasswordCustom" style={{ color: "grey" }}>Password</label>
                    </Form.Floating>
                    {
                            validPssword &&
                            <p className='text-danger'>enter a valid password</p>
                        }
                </>
                {
                    register ?
                        <button onClick={(e)=>handleRegister(e)} className='btn btn-primary my-3'>Sign Up</button>
                        :
                        <button  onClick={(e)=>handleLogin(e)} className='btn btn-primary my-3'>LogIn</button>

                }


                {
                    register ?
                        <p>Already have an account?<Link to={'/authentication'}> Login</Link></p>
                        :
                        <p>Don't have an account?  <Link to={'/register'}>SignUp</Link></p>

                }



            </div>
            <ToastContainer />
        </div>
    )
}

export default Auth
