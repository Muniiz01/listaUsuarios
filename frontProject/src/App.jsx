import { useState, useEffect } from 'react'

import './App.css'

import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  

  useEffect(() => {
    server.get('/usuarios').then(function (res) {
      console.log(res.data)
      setUsers(res.data)
    })
  }, [])

  function newUser() {
    server.post('/usuarios', { age, name }).then((res) => {
      console.log(res)
      location.reload()
    })

  }
  let btn2 = document.getElementById('btn2')
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => {
    setShowElement()

    if (btn2.textContent === "Mostrar lista") {
      btn2.textContent = "Ocultar lista"

      return setShowElement(true)

    } else if (btn2.textContent === "Ocultar lista") {
      btn2.textContent = "Mostrar lista"

      return setShowElement(false)
    }
  }

  //let listaId = users.map((user) => console.log(user._id))
  
  function idSearch(x){
    console.log(x)
  }

  return (
    <div className='container'>

      <div className='title'>

        <h1>Lista de coloaboradores</h1>

      </div>

      <div className='inputs'>

        <h2>Adcionar novo colaborador</h2>

        <input placeholder='nome' onChange={event => setName(event.target.value)} />
        <input placeholder='idade' onChange={event => setAge(event.target.value)} />
        
      </div>

      <button id='btn1' onClick={newUser}>Enviar</button>

      <div className='listen'>
        <button id='btn2' onClick={showOrHide}>Mostrar lista</button>
        {showElement ?
          <ul>
            {users.map(user => (
              <li key={user.name}>Nome: {user.name} - Idade: {user.age} - <button onClick={idSearch(users._id)}>DELETE</button></li>
            ))}
          </ul>
          : null
        }
      </div>







    </div>
  )
}

export default App
