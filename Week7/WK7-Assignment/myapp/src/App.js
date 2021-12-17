import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Actor from './components/Actor';
import ActorForm from './components/ActorForm';

function App() {

  const [actors, setActors] = useState([])

  const getActors = () => {
    axios.get('/actors')
      .then(res => {
        console.log(res)
        setActors(res.data)
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const postActor = (newActor) => {
    axios.post('/actors', newActor)
      .then(res => {
        console.log("new actor: ", res.data)
        setActors(prevActor => [...prevActor, res.data])
      })
      .catch(err => console.log(err))
  }

  const updateActor = (updates, id) => {
    axios.put(`/actors/${id}`, updates)
      .then(res => {
        console.log(res.data)
        setActors(prevActor => prevActor.map(actor => actor._id !== id ? actor : res.data))
      })
  }

  const deleteActor = (id) => {
    axios.delete(`/actors/${id}`)
      .then(res => {
        console.log(res.data)
        setActors(prevActor => prevActor.filter(actor => actor._id !== id))
      })
  }

  useEffect(() => {
    getActors()
  }, [])

  const actorList = actors.map(actor => {
   return <Actor {...actor} updateActor={updateActor} deleteActor={deleteActor} />
  })

  return (
    <>
      <ActorForm postActor={postActor} />
      {actorList}
    </>
  );
}

export default App;
