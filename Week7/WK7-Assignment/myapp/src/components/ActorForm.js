import { useState } from 'react'

function ActorForm({ first, last, imgUrl, alive, movies, age, _id, postActor }) {
    const intialInputs = {first: first || "", last: last || "", imgUrl: imgUrl || "", alive: false, movies: "", age: age || 0}

    const [inputs, setInputs] = useState(intialInputs)
    // const [moviesList, setMoviesList] = useState()
    // const [living, setLiving] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
        
    }

    // const handleInput = () => {
    //     inputs.movies.split(' ,')
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        postActor(inputs)
        setInputs(intialInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={ handleChange } type='text' name='first' placeholder='First' value={inputs.first}></input>
            <input onChange={ handleChange } type='text' name='last' placeholder='Last' value={inputs.last}></input>
            <input onChange={ handleChange } type='text' name='imgUrl' placeholder='ActorImageUrl' value={inputs.imgUrl}></input>
            {/* <label>Alive?</label>
            <input type='checkbox' value={inputs.alive}></input>
            <label>Movies they appeared in?</label>
            <input onChange={ handleInput } type="text" name='movies' value={inputs.movies} ></input> */}
            <input onChange={ handleChange } type='number' name='age' placeholder='Age' value={inputs.age}></input>
            <button className='addBtn'>Submit Actor</button>
        </form>
    )
}

export default ActorForm