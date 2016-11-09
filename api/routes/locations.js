var objection = require( 'objection'         );
var Store     = require( '../../model/Store' );

module.exports = function( app )
{
  /**
   * Gets all locations
   */
  app.get( '/locations', function( req, res, next )
  {
    Store.query()
         .then( function( stores ){ res.send(stores); } )
         .catch( next );
  });
};
