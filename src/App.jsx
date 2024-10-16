// src/App.js
import  { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import LogIn from "./LogIn";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      } 
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL} alt={user.displayName} /> <br /> <br />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

export default App;
