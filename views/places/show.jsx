const React = require('react')
const places = require('../../models/places')
const Default = require('../default')

function show (data) {
    return (
        <Default>
          <main>
        <h1>
            {data.place.name}
        </h1>
        <img src={data.place.pic}/>
        <p className="text-center">
          Located in {data.place.city}, {data.place.state}
        </p>
          </main>
        <h2>
          Rating:
        </h2>
        <p>Not Rated</p>
        <h2>
          Description:
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>    
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
          Edit
        </a>     
        </Default>
    )
}

module.exports = show