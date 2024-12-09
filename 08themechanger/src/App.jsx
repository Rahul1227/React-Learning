import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserProvider } from "./context/NewUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Profile />
      )}
    </UserProvider>
  );
}

export default App;
