import { useState } from 'react'

function BookFormHandler({ btnText, submit, title, genre, _id }){

    const initialInputs = { title: title || '', genre: genre || '' }
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // POST
        submit(inputs, _id)
        setInputs(initialInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={ handleChange }
                placeholder="Title"/>
            <input 
                type="text"
                name="genre"
                value={inputs.genre}
                onChange={ handleChange }
                placeholder="Genre"/>
            <button>{btnText}</button>
        </form>
    )
}

export default BookFormHandler