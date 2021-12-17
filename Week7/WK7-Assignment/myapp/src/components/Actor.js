import { useState } from 'react'
import ActorForm from './ActorForm'

function Actor({ first, last, imgUrl, alive, movies, age, deleteActor, updateActor, _id }){

    const [editToggle, setEditToggle] = useState(false)

    function setToggle(toggle){
        setEditToggle(toggle)
    }

    return(
        <div>
            {
                !editToggle ?
                <>
                    <h2>Actor: {first} {last}</h2>
                    <img src={imgUrl} alt={first}></img>
                    {/* <p>Alive: {alive.toString()}</p>
                    <ul>
                        {movies.map(movie => {return(<li>{movie}</li>)})}
                    </ul> */}
                    <p>Age: {age}</p>
                    <button onClick={() => deleteActor(_id)}>Delete Actor</button>
                    <button onClick={() => setToggle(prevToggle => !prevToggle)}>Update Actor</button>
                </>

                :

                <>
                    <ActorForm 
                        updateActor={updateActor}
                        first={first}
                        last={last}
                        imgUrl={imgUrl}
                        age={age}
                        _id={_id}
                    />
                    <button onClick={() => setToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Actor