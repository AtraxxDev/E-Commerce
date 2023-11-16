import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {auth} from './firebase.js'
const signupForm=document.querySelector('#signup-form')

signupForm.addEventListener('submit',async (e)=>
{
    e.preventDefault();
    const email=signupForm['signup-email'].value
    const password=signupForm['signup-password'].value

    console.log(email,password)
    
    try{
        const userCredentials=createUserWithEmailAndPassword(auth,email,password)
        console.log(userCredentials)

        //cierra el modal de bootstrap
        const signupModal=document.querySelector('#signupModal')
        const modal= bootstrap.Modal.getInstance(signupModal)
        modal.hide()
    }catch(error)
    {
        console.log(error.message)
        console.log(error.code)
     
       if(error.code==='auth/invalid-email')
       {
        alert('Invalid email')
       }
    }
    

})