// main.js

// Firebase config you provided
const firebaseConfig = {
  apiKey: "AIzaSyCMzIzcShaNZrAtmxAE-_sY2JQuXn_zOdg",
  authDomain: "mandalsaving.firebaseapp.com",
  projectId: "mandalsaving",
  storageBucket: "mandalsaving.firebasestorage.app",
  messagingSenderId: "383737474637",
  appId: "1:383737474637:web:27a89d42deaf12337b7604",
  measurementId: "G-20NVPLXBK2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Save form data to Firestore
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("payerName").value;
  const amount = parseFloat(document.getElementById("amountPaid").value);
  const txnId = document.getElementById("txnId").value;

  db.collection("payments").add({
    name: name,
    amount: amount,
    txnId: txnId,
    time: new Date()
  })
  .then(() => {
    alert("✅ Payment submitted successfully!");
    document.getElementById("paymentForm").reset();
  })
  .catch((error) => {
    alert("❌ Error saving payment: " + error.message);
  });
});
