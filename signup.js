// signup.js
import { auth, db, createUserWithEmailAndPassword, sendEmailVerification, doc, setDoc } from './firebase.js';

window.signup = async function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email
    });

    await sendEmailVerification(user);
    alert("Signup successful! Please verify your email.");
  } catch (error) {
    alert("Error: " + error.message);
  }
};
