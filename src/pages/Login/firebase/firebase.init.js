import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializingApp = () => initializeApp(firebaseConfig);

export default initializingApp;