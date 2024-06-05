// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvXjKIE39sE29cljFuuWhHaP0fhNz9cBI",
  authDomain: "project-henrik.firebaseapp.com",
  projectId: "project-henrik",
  storageBucket: "project-henrik.appspot.com",
  messagingSenderId: "482135589223",
  appId: "1:482135589223:web:0614894972a8dfdbdf6fc2",
  measurementId: "G-L5HQMMHZN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const db = getFirestore(app)
const docRef = doc(db, "todoItems", "1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


const q = query(collection(db, "todoItems"), where("erFerdig", "==", false));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const item = document.createElement("li")
  // TODO: Legg til oppgave-teksten vår OG bruk appendChild for å legge til på lista
  item.innerHTML = doc.data()
  listeRef.appendChild(item)
});
