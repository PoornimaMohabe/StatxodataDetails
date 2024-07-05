

import React, { createContext, useState, useEffect } from 'react';


export const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem('user');
    console.log();
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
