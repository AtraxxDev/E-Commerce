import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {auth} from './app/firebase.js'
import './app/logout.js'
import './app/signupform.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/githubLogin.js'
import './app/loginCheck.js'
import { loginCheck } from "./app/loginCheck.js"

onAuthStateChanged(auth,async(user)=>{
    loginCheck(user)
    /*if(user){
      loginCheck(user)
    }else{
      loginCheck(user)
    }*/
    //console.log(user)
})