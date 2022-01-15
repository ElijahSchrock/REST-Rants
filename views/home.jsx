const React = require('react');
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
            <div className='col text-center'>
                <h1>HOME</h1>
                    <img src='/images/stock.jpg' alt='Sunset' width="500" height="300"/>
                        <div>
                            Photo by <a href="https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohamed Nohassi</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </div>
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

module.exports = home