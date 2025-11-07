import React, { createContext, useContext, useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    
    const [user, setUser] = useState(null);
    const [loading , setLoading]=useState(false);


    useEffect(() => {
       
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       if(currentUser){
        setUser(currentUser);
        setLoading(false);
        }
        else{
            setUser(null);}
            setLoading(false);})
        return () => unsubscribe();
    },[auth]);
    const logout = () => {
        setLoading(true);
        signOut(auth);
       setUser(null);
       setLoading(false);
    }
    const value = { user, logout,loading ,setLoading , setUser};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );}
    export const useAuth = () => useContext(AuthContext);