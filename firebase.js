// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMzIzcShaNZrAtmxAE-_sY2JQuXn_zOdg",
  authDomain: "mandalsaving.firebaseapp.com",
  projectId: "mandalsaving",
  storageBucket: "mandalsaving.appspot.com",
  messagingSenderId: "383737474637",
  appId: "1:383737474637:web:27a89d42deaf12337b7604"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
