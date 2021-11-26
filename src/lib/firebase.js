import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLhB9t28YO40aS_yjHDGW4RtIRkdLZKb4",
  authDomain: "virtual-school-a9164.firebaseapp.com",
  projectId: "virtual-school-a9164",
  storageBucket: "virtual-school-a9164.appspot.com",
  messagingSenderId: "424939066258",
  appId: "1:424939066258:web:0a482595313445d89c274b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
