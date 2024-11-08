import React, { createContext, useState, useEffect } from 'react';
import { isAuthenticated, removeToken } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(isAuthenticated());
    }, []);

    const logout = () => {
        removeToken();
        setIsAuth(false);
    };

    const values = { isAuth , logout }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};
