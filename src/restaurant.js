import './restaurant.css'
import React from 'react'
import { useState } from 'react'

export function Restaurant(props){
    const [name, setName] = useState(props.name)
    const [address, setAddress] = useState(props.address)
    const [rating, setRating] = useState(props.rating)
    const [type, setType] = useState(props.type)

    const image = "/273152743_168627848825779_8425305648437838899_n-big.jpg"
    
    return(
        <div className='container'>
            <div className='wrapper'>
                <div className='info-container'>
                    <p><b>Name of restaurant:</b> {name}</p>
                    <p><b>Our address:</b> {address}</p>
                    <p><b>Rating:</b> {rating}/10</p>
                    <p><b>Type:</b> {type}</p>
                </div>
                <form className='form-container'>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)}></input>
                    <input type='text' value={rating} onChange={e => setRating(e.target.value)}></input>
                    <input type='text' value={type} onChange={e => setType(e.target.value)}></input>
                </form>
            </div>
            <div className='img-container'>
                <img src={image}></img>
            </div>
        </div>
    )
} 