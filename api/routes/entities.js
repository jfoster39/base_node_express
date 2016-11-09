var objection = require( 'objection'          );
var Entity    = require( '../../model/Entity' );

module.exports = function( app )
{
  /**
   * Gets all entities
   */
  app.get( '/entities', function( req, res, next )
  {
    Entity.query()
          .then( function( entities ){ res.send(entities); } )
          .catch( next );
  });
};
