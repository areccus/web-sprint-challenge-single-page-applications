import React from 'react';
import {Link, Route} from 'react-router-dom'

export default function Home() {

return (
    <div className="build">
        <img className="buildIMG"
        src="https://media-cdn.tripadvisor.com/media/photo-s/0b/6a/af/79/pizza-inn.jpg" alt="Pizza Variety"/>
        <h2>Build Your Own Pizza</h2>
        <Route>
        <button id="order-pizza"><Link to='/pizza'>Create</Link></button>
        </Route>
    </div>
)
}