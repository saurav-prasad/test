import { createContext, useContext, useReducer } from "react";

const MapMarkerContext = createContext()

export const MapMarkerState = ({reducer,initialstate,children})=>{
    return (
        <MapMarkerContext.Provider value={useReducer(reducer,initialstate)}>
            {children}
        </MapMarkerContext.Provider>
    )
}

export const useMapMarkerState = ()=> useContext(MapMarkerContext)