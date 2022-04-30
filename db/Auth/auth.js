import { auth } from "../config";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithCredential,
    signOut,
    FacebookAuthProvider,
    updateProfile,
} from "firebase/auth";
// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }

  // console.log(auth.currentUser.displayName)
  // Do other things
});

async function register(email, password , name) {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
          displayName: name,  
      })
      .then(() => {
          alert('Registered, please login.');
      })
      .catch((error) => {
          alert(error.message);
      })
  });
}

async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}

async function logout(){
  await signOut(auth)
    .then(()=>{
      console.log("Done")
    })
    .catch((err)=>{
      console.log(err)
    });
}

export { register, login, logout };