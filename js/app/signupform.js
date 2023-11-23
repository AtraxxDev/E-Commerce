import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {auth} from './firebase.js'
import {showMg} from './showMg.js'
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

        //No funciona no sé porque Que mega pro
       showMg("Welcome" + userCredentials.user.email)

    }catch(error)
    {
       // console.log(error.message)
        //console.log(error.code)
     
       if(error.code==='auth/email-already-in-use')
       {
        showMessage("Email already in use", error)
        //alert('Invalid email')
       }else if(error.code==='auth/invalid-email')
       {
        showMessage("Invalid email",error)
       // alert('Invalid email')
       }       
       else if(error.code === 'auth/weak-password')
       {
        showMessage("Weak password",error)
        //alert('Password is too weak')
       }else if(error.code){
        showMessage("Something is wrong I can feel it",error)
        //alert('Something is wrong I can feel it')
       }
    }
    

})