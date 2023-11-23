 // Import the functions you need from the SDKs you need
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    //import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
    import { getAuth} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
    //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDMucXQhdIIod67WZj_iNDg2-x8vsztNtQ",
      authDomain: "desarollounu.firebaseapp.com",
      projectId: "desarollounu",
      storageBucket: "desarollounu.appspot.com",
      messagingSenderId: "698655440255",
      appId: "1:698655440255:web:ddb2af6d450e8cb998ee4a",
      measurementId: "G-1W6N64ZNMC"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth=getAuth(app)
    //const analytics = getAnalytics(app);
 
    // Stripe Secret Pass
    const STRIPE_PUBLISHABLE_KEY = <sk_test_51OFT0gCkic6S98tJ1xMEXfJKAWtkrjk4R80UMGMWMSC799hAe1tNSF3msFfyMFyomALcLz23k5UNrScpxSMQ2NOp00RHnGMuxX></sk_test_51OFT0gCkic6S98tJ1xMEXfJKAWtkrjk4R80UMGMWMSC799hAe1tNSF3msFfyMFyomALcLz23k5UNrScpxSMQ2NOp00RHnGMuxX>
 
  /* import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAc8i2IOJwd0ldUdIarryTa-WOcuRNNFrc",
    authDomain: "reactdemo-f021f.firebaseapp.com",
    projectId: "reactdemo-f021f",
    storageBucket: "reactdemo-f021f.appspot.com",
    messagingSenderId: "1738344802",
    appId: "1:1738344802:web:4c2f12739e988e5a0a443b",
    measurementId: "G-DHGZW1RG1H"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)*/