import React from 'react'
import {auth} from '../Firebase'
import GoogleButton from 'react-google-button'
import {GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
 const provider = new GoogleAuthProvider()
 signInWithRedirect(auth, provider)
}

function SignIn() {
    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSignIn}></GoogleButton>
        </div>
    )
}

export default SignIn