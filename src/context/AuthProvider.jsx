import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const removeUser = (user) => {
        return deleteUser(user)
    }

    const UserInfo  = {
        createUser,
        signInUser,
        removeUser,
    }

    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;