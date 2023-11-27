import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
const signinForm=document.querySelector('#login-form')
import { auth } from "./firebase.js";
import{showMg} from './showMg.js'

signinForm.addEventListener('submit',async e=>{
    e.preventDefault()

    const email=signinForm['login-email'].value;
    const password=signinForm['login-password'].value;

    try{
        const credentials=await signInWithEmailAndPassword(auth,email,password)
        console.log(credentials)

    const modal=bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()

    showMg('Welcome '+ credentials.user.email)

    }catch(error){
        if(error.code==="auth/wrong-password"){
            showMg('Wrong password','error')
        } else if(error.code==="auth/user-not-found"){
            showMg('User not found', 'error')
        }else{
            showMg(error.message,'error')
        }
       // console.log(error)
    }
  
})