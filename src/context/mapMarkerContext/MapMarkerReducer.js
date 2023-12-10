export const MapMarkerInitialState = {
    from: [28.539596870632046, 77.39288253057431],
    to: [26.10904792291295, 91.71659890073151],
}

export const actionTypes = {
    setMarker: 'addMarker',
    unsetMarker: 'removeMarker'
}

const MapMarkerReducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case actionTypes.setMarker:
            return {
                ...state,
                from: action.from,
                to: action.to
            }
        case actionTypes.unsetMarker:
            return { marker: null }
        default: return state
    }
}
export default MapMarkerReducer