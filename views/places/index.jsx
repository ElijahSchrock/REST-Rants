const React = require('react');
const Default = require('../default');

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
    return (
        <div key={index}>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name}></img>
        </div>
    )
    })
        return (
            <Default>
                <main>
                    <h1>Welcome to the Index Page</h1>
                    {placesFormatted}
                </main>
            </Default>
        )
}

module.exports = index