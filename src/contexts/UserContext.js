import React, { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [userData, setUserData] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [successMessage, setSuccessMessage] = useState('')

  const demoUserAuthInfo = [
    {
        'id':1,
        'email': 'shadhin.abc@gmail.com',
        'password': '11223344',
        'name' : 'Shadhin',
        'selectors':"",
        'agree_to_terms': false
    },
    {
        'id':2,
        'email': 'tanveer.abc@gmail.com',
        'password': '1234567890',
        'name' : 'Tanveer',
        'selectors':"",
        'agree_to_terms': false
    }
  ]

  useEffect(()=>{
    Cookies.set('user_info', JSON.stringify(userData))
  },[userData])

  const loginFunction = (data)=>{
    const user = demoUserAuthInfo.find(user => data.email === user.email)
    if (typeof user !== 'undefined') { 
        if(user.password === data.password){
            setIsLoggedin(true)
            localStorage.setItem("authenticated", true);
            setSuccessMessage('You have successfully logged in!')
            setUserData(user);
            window.location.replace('/')
        }else{
            setIsLoggedin(false)
            setSuccessMessage('Password did not match!')
        }
    }else{
        setSuccessMessage('User not found!')
    }

  }



//   const loginData = (result) => {
//     if (result.response.data.token !== undefined) {
//       Cookies.set('token', result.response.data.token, { secure: true, sameSite: 'strict' })
//       Cookies.set('user', result.response.data.user, { secure: true, sameSite: 'strict' })
//       setIsLoggedin(true)
//     } else {
//       console.log("Login token could not be saved")
//     }
//   };


  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    setIsLoggedin(false)
    window.location.replace('/login')
  }


  return (
    <UserContext.Provider value={{ 
        userData, setUserData,
        loginFunction, successMessage, isLoggedin
      }}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserContextProvider;