import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const initializeFirebase=()=>{
    const app = initializeApp(firebaseConfig);
    return app;
}
export default initializeFirebase;