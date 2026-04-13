import { useState, useEffect } from 'react';

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if (!authUser) {
      const defaultUser = { displayName: 'Guest', photoURL: '1' };
      localStorage.setItem('authUser', JSON.stringify(defaultUser));
      return defaultUser;
    }
    return authUser;
  });

  useEffect(() => {
    const listener = () => {
      let authUser = JSON.parse(localStorage.getItem('authUser'));
      if (!authUser) {
        authUser = { displayName: 'Guest', photoURL: '1' };
        localStorage.setItem('authUser', JSON.stringify(authUser));
      }
      setUser(authUser);
    };
    
    // Check initial state
    listener();
    
    // Listen for storage changes if multiple tabs
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  return { user };
}
