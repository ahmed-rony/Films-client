import React, { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("currentUser")) || null,
    loading: false,
    error: null
}

const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null
            };
        case "LOGIN_FAIL":
            return {
                user: null,
                loading: false,
                error: action.payload
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            };

        default:
            return state;
    }
}

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("currentUser", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={
            { currentUser: state.user, loading: state.loading, error: state.error, dispatch }
        }>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;