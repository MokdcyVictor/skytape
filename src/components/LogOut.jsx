import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

const LogOut = () => {
const SignOut = () => {
    signOut(auth)
}
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        LogOut
    </button>
  )
}

export default LogOut