import axios from "axios"

const tollGuru = async (from, to) => {
    console.log(from, to);
    const body = {
        "from": {
            "address": "Philadelphia , Pennsylvania,",
            "lat": from[0],
            "lng": from[1]
        },
        "to": {
            "address": "New York ,NY,",
            "lat": to[0],
            "lng": to[1],
        },
        "serviceProvider": "here",
        "vehicle": {
            "type": "2AxlesTaxi",
            "weight": {
                "value": 20000,
                "unit": "pound"
            },
            "height": {
                "value": 7.5,
                "unit": "meter"
            },
            "length": {
                "value": 7.5,
                "unit": "meter"
            },
            "axles": 4,
            "emissionClass": "euro_5"
        }
    }
    const body1 = {
        "from": {
            "address": "Philadelphia , Pennsylvania,",
            "lat": 27.98039911652882,
            "lng": 79.82195854027213
        },
        "to": {
            "address": "New York ,NY,",
            "lat": 28.539596870632046,
            "lng": 77.39288253057431,
        },
        "serviceProvider": "here",
        "vehicle": {
            "type": "2AxlesTaxi",
            "weight": {
                "value": 20000,
                "unit": "pound"
            },
            "height": {
                "value": 7.5,
                "unit": "meter"
            },
            "length": {
                "value": 7.5,
                "unit": "meter"
            },
            "axles": 4,
            "emissionClass": "euro_5"
        }
    }
    const url = 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints'
    const apiKey = '8j4PRtLBHb238JMHThMhnr2TtTFNjRBF'
    // const data = await axios.post(url, body1,
    //     {
    //         headers: { 'x-api-key': '8j4PRtLBHb238JMHThMhnr2TtTFNjRBF' }
    //     }
    // )

    // console.log(data);

    fetch(url, {
        method: "POST",
        body: JSON.stringify(body1),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'x-api-key': '8j4PRtLBHb238JMHThMhnr2TtTFNjRBF'
        }
    }).then((data) => {
        console.log(data);
    }).catch(e => {
        console.log(e);
    })

}
export default tollGuru