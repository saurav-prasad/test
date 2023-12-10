import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MapMarkerState } from './context/mapMarkerContext/MapMarkerState';
import MapMarkerReducer, { MapMarkerInitialState } from './context/mapMarkerContext/MapMarkerReducer';
import { AddressState } from './context/Address';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressState>
      <MapMarkerState initialstate={MapMarkerInitialState} reducer={MapMarkerReducer}>
        <App />
      </MapMarkerState>
    </AddressState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
