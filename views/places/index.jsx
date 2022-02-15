const React = require('react');
const Default = require('../default');

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
      return (
      <Default>
          <main>
              <div className='col text-center' key={index}>
                <h1>Places to Rant or Rave About</h1>
              </div>
              <div className="row">
                {placesFormatted}
              </div>
              <div className="col text-center">
                <a href="/places/new"><button>Add a new REST-Rant</button></a>
            </div>
          </main>
      </Default>
    )
  }
  
module.exports = index