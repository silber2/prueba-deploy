import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [object, setObject] = useState([])

    useEffect(() => { 
      axios.get('https://prueba-deploy-back.onrender.com/')
      .then(res => {
        setObject(res.data)
      })
      .catch(err => console.error({err}))

    }, [])

  return (
    <>
      <h1>objetos</h1>
      <div>
        {object.map((obj, i) => <h2 key={i}>{obj.name}</h2>)}
      </div>
    </>
  )
}

export default App