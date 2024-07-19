import * as weatherService from './services/weatherServices'

const App = () => {
    const fetchData = async () => {
      const data = await weatherService.show('Chicago')
      console.log(data)
    }
    return (
      <main>
        <h1>Weather API</h1>
        <button onClick={fetchData}>Fetch Weather Data</button>
      </main>
    )
}

export default App