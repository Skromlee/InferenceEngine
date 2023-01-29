// import axios to use API
import axios from "axios";
import { useEffect, useState } from "react";

import Rule from "../components/Rule"

// define a backend URI
const URI = "http://localhost:8000/api/rules/"


function MyRule() {
    const [Rules, setRules] = useState([])

    const getRules = () => {
        // feed data from backend
        axios.get(URI)
        .then(response => {
            setRules(response['data'])
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getRules()
      }, [])
  
  return (
    <div className="container">
      <h2>Rules: </h2>
      <div className="row">
        <ul>
          {Rules.length > 0 ? Rules.map(rule => {
            return <Rule key={rule.id} rule={rule} />
          }): "There is no rule!"}
        </ul>
      </div>
    </div>
  )
}

export default MyRule;
