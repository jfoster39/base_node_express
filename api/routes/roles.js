var objection = require( 'objection'        );
var Role      = require( '../../model/Role' );

module.exports = function( app )
{
  /**
   * Gets all roles
   */
  app.get( '/roles', function( req, res, next )
  {
    Role.query()
        .then( function( roles ){ res.send(roles); } )
        .catch( next );
  });
};
