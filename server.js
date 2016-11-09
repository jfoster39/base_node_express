// server.js

// BASE SETUP - Pull in all the packages included
// ==============================================================================

// call the packages we need
var express     = require( 'express'     ); // call express
var Knex        = require( 'knex'        ); // for db connection / query building
var knexConfig  = require( './knexfile'  );
var morgan      = require( 'morgan'      ); // http middleware logger
var bodyParser  = require( 'body-parser' ); // enables post request body parsing
var Model       = require( 'objection'   ).Model; // gets our model layer
var registerApi = require( './api/api'   ); // gets our API

// Initialize knex.
var knex = Knex( knexConfig.development );

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex( knex );

// Initialize app and set packages / preferences that we are using
var app = express()
    .use( bodyParser.json() )
    .use( morgan('dev') )
    .set( 'json spaces', 4 );

// Register our REST API.
registerApi( app );

// Error handling. The `ValidionError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
app.use( function( err, req, res, next )
{
    if( err )
        res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
    else
        next();
});

// Set up port for server
var server = app.listen( 8641, function()
{
    console.log('Example app listening at port %s', server.address().port);
});
