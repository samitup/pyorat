import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [stations, setStations] = useState([])


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://api.citybik.es/v2/networks/citybikes-helsinki')
      .then(response => {
        console.log('promise fulfilled ' + Object.keys(response.data))
        setStations(response.data.network.stations)
      })
  }, [])

  const renderTableData = () => {

    return stations.map((station) => {

      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Free bikes:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{station.name}</td>
              <br /><td>{station.free_bikes}</td>
            </tr>
          </tbody>
        </table>
      )
    })
  }



  return (
    <div>
      {renderTableData()}
    </div>
  )
}


export default App;