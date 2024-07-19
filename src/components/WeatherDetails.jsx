
const WeatherDetails = (props) => {
    return (
<section>
    <h2>Weather Details</h2>
    <p>Location: {props.weatherDetails.location}</p>
    <p>Temperature: {props.weatherDetails.temperature}</p>
    <p>Condition: {props.weatherDetails.condition}</p>
</section>
    )
}

export default WeatherDetails