import { createContext, useReducer } from "react";


export const dashState = createContext()
export const dashActions = createContext()
export const SHOW_CATEGORY = 'SHOW_CATEGORY';
export const SHOW_YEAR = 'SHOW_YEAR';

const initialState = {
    showCategory: false,
}

const dashReducer = (state, { type, payload }) => {
    switch (type) {
        case SHOW_CATEGORY:{
            console.log(payload)
            return {
                ...state, showCategory: !state.showCategory
            }}
        default:
            return state;
    }
}

export default function DashProvider({ children }) {
    const [state, dispatch] = useReducer(dashReducer, initialState)

    return (
        <dashState.Provider value={{ ...state }}>
            <dashActions.Provider value={dispatch}>
                {children}
            </dashActions.Provider>
        </dashState.Provider>
    )
}
