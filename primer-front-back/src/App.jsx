import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const App = () => {

  const [datos, setData] = useState([])

  const getData = async() => {
    const url = "https://vercel-primerbackend.vercel.app/productos"
    const response = await axios.get(url)
    console.log(response.data)
    setData(response.data)
  }

  console.log("datos del estado",datos)

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <h1>Productos</h1>
     
     <button onClick={getData}>Server</button>

      {datos.map(x=>
      <Card  style={{width:'18rem'}} key={x.id}>
        <Card.Img variant="top" src={x.image} />
        <Card.Body>
        <Card.Title>{x.title}</Card.Title>
        <Card.Subtitle>{x.price}</Card.Subtitle>
        <Card.Text>{x.description}</Card.Text>
        <Button variant="primary">{x.price}</Button>
        </Card.Body>
      </Card>)}
      

    </div>
  )
}

export default App

