document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(err => alert(err.message));
});
