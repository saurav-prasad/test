import React, { useState } from 'react'
import './search.css'
import { useAddressState } from '../../context/Address'
import { useMapMarkerState } from '../../context/mapMarkerContext/MapMarkerState'
import googleApi from '../../googleApi'
import tollGuru from '../../tollguru'
// https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service

function Search() {
    
    const [marker, dispatch] = useMapMarkerState()
    const address = {
        noida: [28.539596870632046, 77.39288253057431],
        guwahati: [26.10904792291295, 91.71659890073151],
        uttarpradesh: [27.98039911652882, 79.82195854027213],
        goa: [15.313550926086757, 73.73490161700677],
        kolkata: [22.57250297817925, 88.36382789783848],
        jaipur: [27.08243074746817, 75.81785738323822]
    }

    const [from, setFrom] = useState(Object.keys(address))
    const [to, setTo] = useState(Object.keys(address))
    const [selected, setSelected] = useState()

    const selectChangeFrom = (e) => {
        const arr = Object.keys(address)
        const selectedValue = e.target.options[e.target.options.selectedIndex].value
        const index = arr.indexOf(selectedValue);
        arr.splice(index, 1)
        setTo(arr)
        setSelected({ ...selected, from: address[selectedValue] })
    }
    const selectChangeTo = (e) => {
        const arr = Object.keys(address)
        const selectedValue = e.target.options[e.target.options.selectedIndex].value
        const index = arr.indexOf(selectedValue);
        arr.splice(index, 1)
        setFrom(arr)
        setSelected({ ...selected, to: address[selectedValue] })

    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch({
            type: 'addMarker',
            from: selected.from,
            to: selected.to,
        })
        tollGuru(selected.from,selected.to)
    }
    return (
        <div className='search'>
            <div className='searchTextBox'>
                <h1 className='searchCarSelect'>From</h1>
                <select onChange={selectChangeFrom} class="selectFormSelect">
                    {
                        from.map((e) => <option>{e}</option>)
                    }
                </select>

                <h1 className='searchCarSelect'>To</h1>
                <select onChange={selectChangeTo} class="selectFormSelect">
                    {
                        to.map((e) => <option >{e}</option>)
                    }
                </select>

                {/* <input className='searchText' type="text" placeholder='Enter Address' name="" id="" />
                <input className='searchText' type="text" placeholder='Enter Address' name="" id="" /> */}
            </div>

            <h1 className='searchCarSelect'>Select your vehicle</h1>
            <select class="selectFormSelect">
                <option selected>Taxi</option>
                <option value="1">Bus</option>
                <option value="2">Motorcycle</option>
                <option value="3">Truck</option>
            </select>
            <button onClick={submitSearch} className='searchBtn'>Calculate toll</button>
        </div>
    )
}

export default Search