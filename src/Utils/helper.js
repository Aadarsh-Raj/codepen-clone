import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../Config/firebase.config";
// sign up with email
export const signUPWithEmail = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Something Went Wrong");
    console.log(error);
  }
};
// sign in with email

export const signInWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("You are logged In successfully.");
  } catch (err) {
    alert("Something Went Wrong");
  }
};
// sign in with google
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    alert("You are logged In successfully.");
  } catch (error) {
    alert("Something Went Wrong");
  }
};
// logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    alert("Your are logged Out");
  } catch (err) {
    alert("Something Went Wrong");
  }
};
