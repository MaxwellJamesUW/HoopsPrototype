 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore, collection, addDoc } from "firebase/firestore";
 
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAhIdCSm1whfXX9cx37RT86RzZ2vjNGImU",
   authDomain: "hoopsgame-d9b0d.firebaseapp.com",
   projectId: "hoopsgame-d9b0d",
   storageBucket: "hoopsgame-d9b0d.appspot.com",
   messagingSenderId: "950448497015",
   appId: "1:950448497015:web:dcb575137f8eba69268172"
 };
 
 // Initialize Firebase app
 const app = initializeApp(firebaseConfig);
 //Initialize Firebase database
 const db = getFirestore(app);
 
 try {
   const docRef = await addDoc(collection(db, "users"), {
     first: "Ada",
     last: "Lovelace",
     born: 1815,
   });
   console.log("Document written with ID: ", docRef.id);
 } catch (e) {
   console.error("Error adding document: ", e);
 }
