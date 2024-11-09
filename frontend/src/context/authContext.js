// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to check if the user is logged in
    const fetchCurrentUser = async () => {
        try {
            const token = localStorage.getItem("realestatert");
            // console.log(token);

            const response = await axios.post(
                'http://localhost:8000/api/v1/user/currentUser',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                }
            );

            console.log(response.data.user);
            setUser(response.data.user)
        } catch (error) {
            console.error("User is not authenticated:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
