import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "@config/firebase.config";
import { extractErrorMessage } from "src/shared/utils/error.utils";

class AuthApi {

  static createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // User successfully created
      console.log("User created:", userCredential.user);
      return userCredential.user

    } catch (error) {
      console.log("Error creating user:", extractErrorMessage(error));
      throw error
    }
  }

  static signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      // User successfully signed in
      console.log("User signed in:", userCredential.user);
      return userCredential.user
    } catch (error) {
      console.error("Error signing in:", extractErrorMessage(error));
      throw error
    }
  }

  static signOutUser = async () => {
    try {
      await signOut(firebaseAuth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", extractErrorMessage(error));
      throw error
    }
  }

}

export default AuthApi;