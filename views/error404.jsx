const React = require('react');
const Default = require('./default');

function error404 () {
    return (
        <Default>
            <main>
            <div className='col text-center'>
                <h1> 404: PAGE NOT FOUND -__-</h1>
                <p>Got Dammit, Randy lost this page again!</p>
                    <img src='/images/404.jpg' alt='404img' width="500" height="300"/>
                </div>
                <div className='col text-center'>
                    <a href='/places'>
                        <button className='btn-primary'>Places Page</button>
                    </a>
                </div>
            </main>
        </Default>
    )
}

module.exports = error404