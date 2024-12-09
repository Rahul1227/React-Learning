import React, { useState } from "react";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContextProvider>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Profile />
      )}
    </UserContextProvider>
  );
}

export default App;
