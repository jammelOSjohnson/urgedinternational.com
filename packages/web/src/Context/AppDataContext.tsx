import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//import fetchAddressApi from '../Apis/fetchAddressApi';

const defaultState = undefined
export type Action = 'get_address';
export type Dispatch = (action: Action) => void;
export type value = typeof defaultState; 
//Create Context
export var AppDataContext = createContext<any>(undefined);



export function useAppData () {
    return useContext(AppDataContext);
}


//create reducer
function appDataReducer(state, action){
    switch(action.type){
        
        case "get_address":
            console.log("dispatching address:");
            console.log(action.payload.Address);
            return{
                ...state,
                Address: action.payload.Address
            };
        default:
            return state;
    }
}


//create provider
export default function AppDataProvider({ children }: { children: ReactNode}) {
    //Declare necessary variables
    
    //Get Address TO BE DELETED
    var getAddress = function getAddress(currentState: { Address: string; }){

        

       
    }

    const [value, dispatch] = useReducer(appDataReducer, {
        getAddress
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};

