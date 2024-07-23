// https://firebase.google.com/docs/auth/web/start

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

// importing function of firebase to help authentication ma
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW3uGVqCwFRMXhA2rqfMskFbrpFpxEotQ",
  authDomain: "smit-b11-64429.firebaseapp.com",
  projectId: "smit-b11-64429",
  storageBucket: "smit-b11-64429.appspot.com",
  messagingSenderId: "427881912480",
  appId: "1:427881912480:web:fd56d026ed0207ef2f91c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const messageDiv = document.querySelector("#message");

document
  .querySelector("#signup-form")
  .addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      // getting email and password from user through html
      const email = event.target.children[0].value;
      const password = event.target.children[1].value;

      // sending email and password to firebase
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("result ", result);

      messageDiv.innerText = "Signup successfully!";

      event.target.reset(); // clears form
    } catch (error) {
      console.log("error ", error);

      messageDiv.innerText = error.message;
    }
  });
