import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth"
import { auth } from "../Config/firebase.config"

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async ()=>{
    console.log("clicked");
        await signInWithRedirect(auth, googleProvider).then(userCred => {
            window.location.reload();
        })
}