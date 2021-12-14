// import { useState } from 'react'
// import ActorForm from './ActorForm'

function Actor({ first, last, imgUrl, alive, movies, age, _id }){

    // const [editToggle, setEditToggle] = useState(false)

    return(
        <div>
            <div>
                <h2>Actor: {first} {last}</h2>
                <img src={imgUrl} alt={first}></img>
                <p>Alive: {alive.toString()}</p>
                <ul>
                    {movies.map(movie => {return(<li>{movie}</li>)})}
                </ul>
                <p>Age: {age}</p>
                <button>Button</button>
            </div>
        </div>
    )
}

export default Actor