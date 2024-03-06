import React from 'react'
import {auth} from '../Firebase'
import SignIn from './SignIn'
import LogOut from './LogOut'
import { useAuthState } from 'react-firebase-hooks/auth'


const style = {
    nav: `bg-gray-800 h-20 flex justify-between itens-center p-4`,
    heading:`text-white text-3xl`
}

const NavBar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {user ? <LogOut/> : <SignIn/>}
    </div>
  )
}

export default NavBar