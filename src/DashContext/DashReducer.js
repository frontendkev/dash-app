import { createContext, useReducer } from "react";
import { sales, phoneSales } from "../Data/Data";


export const dashState = createContext()
export const dashActions = createContext()
export const SHOW_CATEGORY = 'SHOW_CATEGORY';
export const SHOW_YEAR = 'SHOW_YEAR';
export const FETCH_SALES = 'FETCH_SALES';
export const FETCH_PHONE_SALES = 'FETCH_PHONE_SALES';

const initialState = {
    showCategory: false,
    showYear: false,
    salesByLocation: [],
    salesByMonth: [],
    salesByCategory: [],
    pieSales: [],
    returnReasons: [],
    dataMax: 0,
    returnedMost: ''

}

const dashReducer = (state, { type, payload }) => {
    switch (type) {
        case SHOW_CATEGORY:{
            return {
                ...state, showCategory: payload
            }}
            case SHOW_YEAR: {
                return {
                    ...state, showYear: payload
                }
        }
        case FETCH_SALES: {
            return {
                ...state, salesByLocation: sales[payload].locationSales, salesByMonth: sales[payload].monthlySales, salesByCategory: sales[payload].categorySales, pieSales: sales[payload].pieSales, returnReasons: sales[payload].returnReasons, dataMax: sales.dataMax, returnedMost: sales[payload].returnedMost
            }
        }
        case FETCH_PHONE_SALES: {
            return {
                ...state, salesByLocation: phoneSales[payload].locationSales, salesByMonth: phoneSales[payload].monthlySales, salesByCategory: phoneSales[payload].categorySales, pieSales: phoneSales[payload].pieSales, returnReasons: phoneSales[payload].returnReasons, dataMax: phoneSales.dataMax, returnedMost: sales[payload].returnedMost
            }
        }
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
