import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { fetchCurrentUser } from '../api/userApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCurrentUser = async () => {
        const user = await fetchCurrentUser();
        setUser(user)
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
