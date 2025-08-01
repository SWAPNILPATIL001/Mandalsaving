// login.js
import { auth, signInWithEmailAndPassword } from './firebase.js';

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert("Please verify your email before logging in.");
      return;
    }

    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};
