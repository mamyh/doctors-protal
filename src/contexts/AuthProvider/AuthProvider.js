import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { userFunctions } = useFirebase();
    return (
        <AuthContext.Provider value={userFunctions}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
