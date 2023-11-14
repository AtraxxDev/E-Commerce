import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {getAuth} from './firebase.js'
const signupForm=document.querySelector('signup-form')

signupForm.addEventListener('submit',async (e)=>
{
    e.preventDefault();
    const email=signupForm['signup-email'].value
    const password=signupForm['signup-password'].value

    try{
        const userCredentials=createUserWithEmailAndPassword(getAuth,email,password)
        console.log(userCredentials)

        //cierra el modal de bootstrap
        const signupModal=document.querySelector('#signupModal')
        const modal= bootstrap.Modal.getInstance(signupModal)
        modal.hide()
    }catch(error)
    {
        console.log(error.message)
        console.log(error.code)
     
        if(error.code==='auth/email-already-in-use')
        {
            alert('Email already in use')
        }     
        if(error.code==='auth/invalid-email')
        {
            alert('Invalid email')
        }else if (error.code==='auth/weak-password')
        {
            alert('Password is too weak')
        }else if(error.code){
            alert('NANI?????')
        }
    }
    

})