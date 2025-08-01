// dashboard.js
import { auth, db, onAuthStateChanged, signOut, doc, getDoc } from './firebase.js';

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      document.getElementById("profile").innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
      `;
    }
  } else {
    window.location.href = "login.html";
  }
});
