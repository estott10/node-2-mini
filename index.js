const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
const massive= require('massive');
const controller= require('./controller')


require('dotenv').config()
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    // dbInstance.get_planes()
    //     .then( planes => console.log( planes ) )
    //     .catch( err => console.log( err ) );
    });

app.get('/api/planes', controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

