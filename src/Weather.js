import React from 'react'

function Weather(props) {
    return (
        <div>
            Today's weather of {props.city} is {props.weather}
        </div>
    )
}

export default Weather