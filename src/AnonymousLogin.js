import React, { useState } from "react";
import { auth, signInAnonymously } from "./firebase";

const AnonymousLogin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleAnonymousLogin = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      setUser(userCredential.user);
    } catch (err) {
      setError("Error signing in anonymously: " + err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Anonymous Login</h2>
      {user ? (
        <div>
          <p>Logged in as: {user.uid}</p>
        </div>
      ) : (
        <button onClick={handleAnonymousLogin}>Login Anonymously</button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AnonymousLogin;
