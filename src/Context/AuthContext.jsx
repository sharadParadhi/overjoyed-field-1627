import React, {useState} from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


export const Authcontext=createContext()

export default function AuthContextProvider(props) {
  const [isAuth,setisAuth]=useState(false)
  const [loading,SetLoading]=useState(false)
  const [token,setToken]=useState("")
  const [cartData,setCartData]=useState([])

  return (
    <Authcontext.Provider value={{isAuth,setisAuth,token,setToken,loading,SetLoading,cartData,setCartData}}>
      {props.children}
    </Authcontext.Provider>
  )
}