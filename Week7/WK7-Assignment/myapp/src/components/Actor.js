import { useState } from 'react'
import ActorForm from './ActorForm'

function Actor(props){

    const { first, last, imgUrl, alive, movies, age, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div>
            { !editToggle ?
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
                :
            <div>
                <ActorForm 
                    key={_id}
                    first={first}
                    last={last}
                    imgUrl={imgUrl}
                    alive={alive}
                    movies={movies}
                    age={age}
                    _id={_id} 
                />
                <button
                    className='addBtn' 
                    onClick={() => {
                        
                    }}
                >Update Actor</button>    
            </div>
        }
        </div>
    )
}

export default Actor