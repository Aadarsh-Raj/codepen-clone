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
   const response = await createUserWithEmailAndPassword(auth, email, password);
   return response;
  } catch (error) {
    console.log(error);
  }
};
// sign in with email

export const signInWithEmail = async (email, password) => {
  try {
   const response = await signInWithEmailAndPassword(auth, email, password);
   return response;
  } catch (error) {
    console.log(error);
  }
};
// sign in with google
export const signInWithGoogle = async () => {
  try {
   const response = await signInWithPopup(auth, googleProvider);
return response;
  } catch (error) {
    console.log(error);
  }
};
// logout user
export const logoutUser = async () => {
  try {
   const response = await signOut(auth);
   return response;
  } catch (err) {
    console.log(err);
  }
};
