import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default function Login() {
  return <button onClick={handleLogin}>Sign in with Google</button>;
}
