const React = require('react');

function Default (html) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            <link rel='stylesheet' href='/css/style.css'/>
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/places'>REST-Rants</a>
                    </li>
                    <li>
                        <a href='/places/new'>Add a REST-Rant</a>
                    </li>
                </ul>
            </nav>
            {html.children}
        </body>
        </html>
    )
}


module.exports = Default