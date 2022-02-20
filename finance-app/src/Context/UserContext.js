import React from 'react'
import { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

const initialState = {
    transactions:[

    ],
    user: ''
}

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer,initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id 
        });
    }

    function addTransaction(id){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });
    }

    function setUser(id){
        dispatch({
            type:'SET_USER',
            payload: id
        })
    }

    return(
        <UserContext.Provider value={{
            transactions: state.transactions,
            user: state.user,
            deleteTransaction,
            addTransaction,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}