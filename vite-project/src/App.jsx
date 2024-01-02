import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chart from "./charts"
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>
                _id
              </th>
              <th>
                end_year
              </th>
              <th>
                intensity
              </th>
              <th>
                sector
              </th>
              <th>
                topic
              </th>
              <th>
                insight
              </th>
              <th>
                url
              </th>
              <th>
                region
              </th>
              <th>
                start_year
              </th>
              <th>
                impact
              </th>
              <th>
                added
              </th>
              <th>
                published
              </th>
              <th>
                country
              </th>
              <th>
                relevance
              </th>
              <th>
                pestle
              </th>
              <th>
                source
              </th>
              <th>
                title
              </th>
              <th>
                likelihood
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return <tr>
                  <td>
                    {user._id}
                  </td>
                  <td>
                    {user.end_year}
                  </td>
                  <td>
                    {user.intensity}
                  </td>
                  <td>
                    {user.sector}
                  </td>
                  <td>
                    {user.topic}
                  </td>
                  <td>
                    {user.insight}
                  </td>
                  <td>
                    {user.url}
                  </td>
                  <td>
                    {user.region}
                  </td>
                  <td>
                    {user.start_year}
                  </td>
                  <td>
                    {user.impact}
                  </td>
                  <td>
                    {user.added}
                  </td>
                  <td>
                    {user.published}
                  </td>
                  <td>
                    {user.country}
                  </td>
                  <td>
                    {user.relevance}
                  </td>
                  <td>
                    {user.pestle}
                  </td>
                  <td>
                    {user.source}
                  </td>
                  <td>
                    {user.title}
                  </td>
                  <td>
                    {user.likelihood}
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
        <Chart data={users}></Chart>
      </div>
    </div>

  )
};

export default App;
/*import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>
                _id
              </th>
              <th>
                end_year
              </th>
              <th>
                intensity
              </th>
              <th>
                sector
              </th>
              <th>
                topic
              </th>
              <th>
                insight
              </th>
              <th>
                url
              </th>
              <th>
                region
              </th>
              <th>
                start_year
              </th>
              <th>
                impact
              </th>
              <th>
                added
              </th>
              <th>
                published
              </th>
              <th>
                country
              </th>
              <th>
                relevance
              </th>
              <th>
                pestle
              </th>
              <th>
                source
              </th>
              <th>
                title
              </th>
              <th>
                likelihood
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return <tr>
                  <td>
                    {user._id}
                  </td>
                  <td>
                    {user.end_year}
                  </td>
                  <td>
                    {user.intensity}
                  </td>
                  <td>
                    {user.sector}
                  </td>
                  <td>
                    {user.topic}
                  </td>
                  <td>
                    {user.insight}
                  </td>
                  <td>
                    {user.url}
                  </td>
                  <td>
                    {user.region}
                  </td>
                  <td>
                    {user.start_year}
                  </td>
                  <td>
                    {user.impact}
                  </td>
                  <td>
                    {user.added}
                  </td>
                  <td>
                    {user.published}
                  </td>
                  <td>
                    {user.country}
                  </td>
                  <td>
                    {user.relevance}
                  </td>
                  <td>
                    {user.pestle}
                  </td>
                  <td>
                    {user.source}
                  </td>
                  <td>
                    {user.title}
                  </td>
                  <td>
                    {user.likelihood}
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>

  )
};

export default App;*/
