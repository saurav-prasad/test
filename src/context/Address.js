import { createContext, useContext } from "react";

const AddressContext = createContext()

export const AddressState = (props) => {
    const address = {
        noida: [28.539596870632046, 77.39288253057431],
        guwahati: [26.10904792291295, 91.71659890073151],
        uttarpradesh: [27.98039911652882, 79.82195854027213],
        goa: [15.313550926086757, 73.73490161700677],
        kolkata: [22.57250297817925, 88.36382789783848],
        jaipur: [27.08243074746817, 75.81785738323822]
    }
    return <AddressContext.Provider value={{ address }}>
        {props.children}
    </AddressContext.Provider>
}

export const useAddressState = () => useContext(AddressState)