import { useState, useEffect } from 'react';

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    // Only clear on refresh if we are at the root (start always)
    if (window.location.pathname === '/') {
      localStorage.removeItem('authUser');
      return null;
    }
    return JSON.parse(localStorage.getItem('authUser'));
  });

  useEffect(() => {
    const listener = () => {
      const authUser = JSON.parse(localStorage.getItem('authUser'));
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
