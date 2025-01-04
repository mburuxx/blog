import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async(inputs) => {
    const res = await axios.post("/auth/login", inputs);
    console.log("Login Response:", res.data); // Ensure it's an object
    setCurrentUser(res.data);
  };

  const logout = async(inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null)
  };

  // Update local storage each time there is a new user
  useEffect(() => {
    console.log("Current User in Context:", currentUser); // Debugging
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};